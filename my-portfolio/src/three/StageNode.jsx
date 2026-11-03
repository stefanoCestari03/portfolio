import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import NodeBadge from './NodeBadge';

export default function StageNode({ position, color, glyph, progressRef, stageId }) {
  const ringRef = useRef();
  const coreRef = useRef();

  useFrame(({ clock }, delta) => {
    const p = progressRef?.current?.[stageId] ?? 0;
    const visited = THREE.MathUtils.clamp(p, 0, 1);
    const scale = THREE.MathUtils.lerp(0.55, 1, visited);
    const glow = THREE.MathUtils.lerp(0.3, 1, visited);

    if (coreRef.current) {
      coreRef.current.scale.setScalar(scale * (1 + Math.sin(clock.elapsedTime * 2) * 0.04));
      coreRef.current.material.opacity = glow;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.3;
      ringRef.current.scale.setScalar(scale);
      ringRef.current.material.opacity = 0.25 + glow * 0.4;
    }
  });

  return (
    <group position={position}>
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.12, 20, 20]} />
        <meshBasicMaterial color={color} transparent opacity={0.4} toneMapped={false} />
      </mesh>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.22, 0.25, 40]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} side={THREE.DoubleSide} toneMapped={false} />
      </mesh>
      <NodeBadge glyph={glyph} color={color} />
    </group>
  );
}
