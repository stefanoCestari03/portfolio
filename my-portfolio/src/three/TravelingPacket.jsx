import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { getPathPosition, segmentFor } from './pathConfig';

const TRAIL = [0, 0.012, 0.024, 0.036];

export default function TravelingPacket({ colors }) {
  const refs = useRef([]);
  const tmpColor = useRef(new THREE.Color());

  useFrame(() => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? THREE.MathUtils.clamp(window.scrollY / scrollable, 0, 1) : 0;

    const { i, t } = segmentFor(progress);
    const colorA = new THREE.Color(colors[i]);
    const colorB = new THREE.Color(colors[Math.min(i + 1, colors.length - 1)]);
    tmpColor.current.copy(colorA).lerp(colorB, t);

    TRAIL.forEach((offset, idx) => {
      const mesh = refs.current[idx];
      if (!mesh) return;
      const p = getPathPosition(Math.max(progress - offset, 0));
      mesh.position.set(p[0], p[1], p[2]);
      mesh.material.color.copy(tmpColor.current);
      mesh.material.opacity = 1 - idx / TRAIL.length;
    });
  });

  return (
    <group>
      {TRAIL.map((_, idx) => (
        <mesh key={idx} ref={(el) => (refs.current[idx] = el)}>
          <sphereGeometry args={[0.07 - idx * 0.012, 12, 12]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={1} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}
