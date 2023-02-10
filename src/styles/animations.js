const animationMainImageX = {
  "0%": {
    transform: "translateX(-25%)",
    AnimationTimeline: "cubic-bezier(0.8, 0, 1, 1)",
  },
  "100%": {
    transform: "translateX(0)",
    AnimationTimeline: "cubic-bezier(0, 0, 0.2, 1)",
  },
};

const animationMainImage = {
  "0%": {
    transform: "translateY(20%)",
    AnimationTimeline: "cubic-bezier(0.8, 0, 1, 1)",
    opacity: "0",
    delay: "3s",
  },
  "100%": {
    transform: "translateY(0)",
    AnimationTimeline: "cubic-bezier(0, 0, 0.2, 1)",
    opacity: "1",
  },
};

module.exports = { animationMainImageX, animationMainImage };
