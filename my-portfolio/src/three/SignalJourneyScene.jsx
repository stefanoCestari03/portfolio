import { Canvas } from '@react-three/fiber';
import CameraRig from './CameraRig';
import SignalPath from './SignalPath';
import StageNode from './StageNode';
import TravelingPacket from './TravelingPacket';
import { PATH_POINTS, STAGE_ORDER } from './pathConfig';
import { hero, stages, certifications, projects, contact } from '../data/stages';

const STAGE_DATA = {
  training: stages.find((s) => s.id === 'training'),
  sysadmin: stages.find((s) => s.id === 'sysadmin'),
  soc: stages.find((s) => s.id === 'soc'),
  certifications,
  xenos: stages.find((s) => s.id === 'xenos'),
  projects,
  contact
};

const PATH_COLORS = STAGE_ORDER.map((id) => (id === 'hero' ? hero.color : STAGE_DATA[id]?.color || '#ffffff'));

export default function SignalJourneyScene({ stageProgressRef }) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 2]} camera={{ fov: 50, position: [0, 0, 13] }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <CameraRig />
        <SignalPath />
        <TravelingPacket colors={PATH_COLORS} />
        {STAGE_ORDER.map((id, i) => {
          if (id === 'hero') return null;
          const data = STAGE_DATA[id];
          if (!data) return null;
          return (
            <StageNode
              key={id}
              stageId={id}
              position={PATH_POINTS[i]}
              color={data.color}
              glyph={data.glyph}
              progressRef={stageProgressRef}
            />
          );
        })}
      </Canvas>
    </div>
  );
}
