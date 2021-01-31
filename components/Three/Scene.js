import { OrbitControls, softShadows } from "@react-three/drei";
import { useRef, useState } from "react";
import { Canvas, useFrame, useResource } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
softShadows();
const TUBE_LENGTH = 10;

function Light() {
  const ref = useResource();

  return (
    <>
      <pointLight
        rotation={[Math.PI * 4, 0, 0]}
        ref={ref}
        position={[8, 15, 20]}
        castShadow
        color="hotpink"
      />
      {ref.current && <pointLightHelper args={[ref.current, 1]} />}
    </>
  );
}

function Plane({ ...props }) {
  return (
    <mesh {...props} receiveShadow>
      <planeBufferGeometry args={[500, 500, 1, 1]} />
      <shadowMaterial transparent opacity={0.1} />
    </mesh>
  );
}

export default function Scene({ children }) {
  const [hovered, setHover] = useState(false);
  return (
    <Canvas colorManagement shadowMap>
      <Plane rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -3, 0]} />
      <OrbitControls />
      <ambientLight />
      <Light />
      {/* <Cake
        onPointerOver={(_) => setHover(true)}
        onPointerOut={(_) => setHover(false)}
      /> */}
      {/* <directionalLight
        position={[-8, 20, 8]}
        shadow-camera-left={d * -1}
        shadow-camera-bottom={d * -1}
        shadow-camera-right={d}
        shadow-camera-top={d}
        shadow-camera-near={0.1}
        shadow-camera-far={1500}
        castShadow
      /> */}
      <Pipe />
      {children}
    </Canvas>
  );
}

export function Box(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(_) => setActive(!active)}
      onPointerOver={(_) => setHover(true)}
      onPointerOut={(_) => setHover(false)}
    >
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const Joint = ({
  radius,
  position,
  quality,
  direction,
  color = "red",
  ...props
}) => (
  <mesh
    receiveShadow
    castShadow
    position={position}
    rotation-z={direction}
    {...props}
  >
    <torusBufferGeometry
      args={[radius, radius, quality, quality, Math.PI / 2]}
    />
    <meshPhysicalMaterial clearcoat={1} color="hotpink" />
  </mesh>
);

function Pipe() {
  const radius = 1;
  const quality = 16;
  return (
    <group position={[0, 2, 0]}>
      <mesh receiveShadow castShadow>
        <cylinderBufferGeometry args={[radius, radius, TUBE_LENGTH, quality]} />
        <meshPhysicalMaterial clearcoat={1} color="hotpink" />
      </mesh>
      <Joint
        color="magenta"
        position={[radius, TUBE_LENGTH / 2]}
        radius={radius}
        quality={quality}
        direction={Math.PI / 2}
      />
      <mesh
        receiveShadow
        castShadow
        position={[TUBE_LENGTH / 2 + radius, TUBE_LENGTH / 2 + radius]}
        rotation-z={Math.PI / 2}
      >
        <cylinderBufferGeometry args={[radius, radius, TUBE_LENGTH, quality]} />
        <meshPhysicalMaterial clearcoat={1} color="hotpink" />
      </mesh>
      <Joint
        color="orange"
        position={[radius + TUBE_LENGTH, TUBE_LENGTH / 2]}
        radius={radius}
        quality={quality}
      />
      <mesh
        receiveShadow
        castShadow
        position={[TUBE_LENGTH + radius + radius, 0]}
      >
        <cylinderBufferGeometry args={[radius, radius, TUBE_LENGTH, quality]} />
        <meshPhysicalMaterial clearcoat={1} color="hotpink" />
      </mesh>
    </group>
  );
}

function Cake({ active, ...props }) {
  return (
    <group {...props}>
      <a.mesh receiveShadow castShadow position={[0, 2, 0]}>
        <cylinderBufferGeometry args={[0.5, 0.5, 1, 64]} />
        <meshStandardMaterial color="#ae7373" />
      </a.mesh>
      <a.mesh receiveShadow castShadow position={[0, 1, 0]}>
        <cylinderBufferGeometry args={[1, 1, 1, 64]} />
        <meshStandardMaterial color="#ae7373" />
      </a.mesh>
      <group>
        <a.mesh receiveShadow castShadow>
          <cylinderBufferGeometry args={[1.5, 1.5, 1, 64]} />
          <meshStandardMaterial color="#ae7373" />
        </a.mesh>
      </group>
    </group>
  );
}
