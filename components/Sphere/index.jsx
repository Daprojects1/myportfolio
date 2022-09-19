/* eslint-disable react/no-unknown-property */
import { useFrame } from "react-three-fiber";
import { useRef } from "react";

const Sphere = () => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    sphereRef.current.rotation.y = elapsedTime;
  });
  return (
    <>
      <mesh ref={sphereRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial wireframe color="black" />
      </mesh>
    </>
  );
};

export default Sphere;
