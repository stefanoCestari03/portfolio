import { useMemo } from 'react';
import * as THREE from 'three';
import { buildPathCurve } from './pathConfig';

export default function SignalPath() {
  const geometry = useMemo(() => {
    const curve = buildPathCurve();
    return new THREE.TubeGeometry(curve, 200, 0.015, 8, false);
  }, []);

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial color="#8b96a5" transparent opacity={0.3} toneMapped={false} />
    </mesh>
  );
}
