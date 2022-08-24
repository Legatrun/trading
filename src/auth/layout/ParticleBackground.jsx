import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { particleConfig } from "./particleConfig";

export const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            params={particleConfig}
            id="tsparticles"
            init={particlesInit}
        />
    );
};
