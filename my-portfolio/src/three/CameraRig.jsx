import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { getPathPosition } from './pathConfig';

export default function CameraRig() {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3());
  const targetLook = useRef(new THREE.Vector3());
  const currentLook = useRef(new THREE.Vector3(0, 0, 9));

  useFrame(() => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? THREE.MathUtils.clamp(window.scrollY / scrollable, 0, 1) : 0;

    const here = getPathPosition(progress);
    const ahead = getPathPosition(Math.min(progress + 0.015, 1));

    const herePt = new THREE.Vector3(...here);
    const aheadPt = new THREE.Vector3(...ahead);
    const forward = aheadPt.clone().sub(herePt);
    if (forward.lengthSq() < 0.0001) forward.set(0, 0, -1);
    forward.normalize();

    targetPos.current.copy(herePt).sub(forward.clone().multiplyScalar(4)).add(new THREE.Vector3(0, 1.1, 0));
    targetLook.current.copy(herePt).add(forward.clone().multiplyScalar(2));

    camera.position.lerp(targetPos.current, 0.06);
    currentLook.current.lerp(targetLook.current, 0.06);
    camera.lookAt(currentLook.current);
  });

  return null;
}
