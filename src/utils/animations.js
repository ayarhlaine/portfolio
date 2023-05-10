export const textVariant = {
    offscreen: {
      y: -50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.2,
        duration: 1.25
      }
    },
};

export const fadeIn = (delay, duration) => {
    return {
        offscreen: {
            x: 0,
            y: 0,
            opacity: 0,
        },
        onscreen: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    }
}