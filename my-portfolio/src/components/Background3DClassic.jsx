import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3DClassic() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Network sphere: wireframe + node points — a nod to network/cloud infrastructure
    const network = new THREE.Group();

    const icoGeometry = new THREE.IcosahedronGeometry(3.3, 2);
    const edges = new THREE.EdgesGeometry(icoGeometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.12 });
    network.add(new THREE.LineSegments(edges, lineMaterial));

    const nodeMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, transparent: true, opacity: 0.75 });
    network.add(new THREE.Points(icoGeometry, nodeMaterial));

    scene.add(network);

    // Sparse star field for depth across the whole scroll
    const starCount = 350;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 40;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 8;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.03, transparent: true, opacity: 0.45 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    let frameId;
    const animate = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;

      network.rotation.y += 0.0016;
      network.rotation.x += 0.0006;
      network.rotation.y += (mouseX * 0.3 - network.rotation.y) * 0.02;
      network.rotation.x += (mouseY * 0.2 - network.rotation.x) * 0.02;
      network.rotation.z = scrollProgress * Math.PI * 0.5;
      network.position.y = -scrollProgress * 1.5;

      stars.rotation.y += 0.00015;
      stars.position.y = scrollProgress * 0.8;

      camera.position.z = 9 - scrollProgress * 2;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    if (prefersReducedMotion) {
      renderer.render(scene, camera);
    } else {
      animate();
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      icoGeometry.dispose();
      edges.dispose();
      lineMaterial.dispose();
      nodeMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true" />;
}
