import * as THREE from 'three';

// One point per section, in page order. The signal travels this path as the page scrolls;
// each interior point (not hero/contact) is also a stage "node".
export const PATH_POINTS = [
  [0, 0, 9], // hero
  [1.6, 0.6, 2], // training
  [-1.6, 1.0, -3], // sysadmin
  [1.3, -0.4, -8], // soc
  [0, 1.4, -13], // certifications
  [-1.9, 0.3, -18], // xenos
  [1.1, 1.1, -22], // projects
  [0, 0, -26] // contact
];

export const STAGE_ORDER = ['hero', 'training', 'sysadmin', 'soc', 'certifications', 'xenos', 'projects', 'contact'];

// Relative scroll weight of each section (must track the actual Tailwind heights used in Portfolio.jsx:
// hero/contact = 100vh, the 6 stage wrappers = 180vh each).
const WEIGHTS = [100, 180, 180, 180, 180, 180, 180, 100];
const TOTAL = WEIGHTS.reduce((a, b) => a + b, 0);
const BREAKPOINTS = WEIGHTS.reduce(
  (acc, w) => {
    acc.push(acc[acc.length - 1] + w / TOTAL);
    return acc;
  },
  [0]
);

export function segmentFor(progress) {
  let i = 0;
  while (i < BREAKPOINTS.length - 2 && progress > BREAKPOINTS[i + 1]) i++;
  const segStart = BREAKPOINTS[i];
  const segEnd = BREAKPOINTS[i + 1];
  const t = segEnd > segStart ? THREE.MathUtils.clamp((progress - segStart) / (segEnd - segStart), 0, 1) : 0;
  return { i, t };
}

// Smooth visual tube for the cable — purely cosmetic, not used for packet/camera positioning.
export function buildPathCurve() {
  return new THREE.CatmullRomCurve3(PATH_POINTS.map((p) => new THREE.Vector3(...p)), false, 'catmullrom', 0.3);
}

// Packet/camera positioning: simple linear interpolation between the two nearest control points,
// weighted by each section's actual scroll height so travel speed matches scroll amount.
export function getPathPosition(progress) {
  const { i, t } = segmentFor(progress);
  const a = PATH_POINTS[i];
  const b = PATH_POINTS[Math.min(i + 1, PATH_POINTS.length - 1)];
  return [
    THREE.MathUtils.lerp(a[0], b[0], t),
    THREE.MathUtils.lerp(a[1], b[1], t),
    THREE.MathUtils.lerp(a[2], b[2], t)
  ];
}
