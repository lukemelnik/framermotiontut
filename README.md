# Learning The Basics of Framer Motion

## Takeaways:

1. Basic motion with initial, animate & transition properties. If you wrap your motion.div element in `<AnimatePresence>` then you can add an 'exit' property that it will go to before being removed from view.

2. Add keyframes with an array. For transitions the times are percentages between 0/1 with the total time set by duration

3. Gestures: whileHover & whileTap, can still controll durations with transition.

4. Use `<MotionConfig>` to apply settings to multiple elements

5. Variants: you can define multiple actions and trigger them differently e.g. on hover vs tap or externally via button.
