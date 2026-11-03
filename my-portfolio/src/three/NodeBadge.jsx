import { Html } from '@react-three/drei';
import { Wifi, Terminal, ShieldAlert, Award, Network, FolderGit2, Mail } from 'lucide-react';

const ICONS = { Wifi, Terminal, ShieldAlert, Award, Network, FolderGit2, Mail };

export default function NodeBadge({ glyph, color, opacity = 1 }) {
  const Icon = ICONS[glyph] || Network;

  return (
    <Html center distanceFactor={8} zIndexRange={[10, 0]} style={{ pointerEvents: 'none' }}>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(5,7,10,0.65)',
          border: `1px solid ${color}`,
          boxShadow: `0 0 12px ${color}66`,
          opacity,
          transition: 'opacity 0.3s ease'
        }}
      >
        <Icon size={18} color={color} strokeWidth={1.75} />
      </div>
    </Html>
  );
}
