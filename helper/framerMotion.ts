export const motionProps = (top: number, duration: number, delay: number) => ({
  variants: {
    hidden: { top, opacity: 0, transition: { duration } },
    visible: { top: 0, opacity: 1, transition: { duration, delay } },
  },
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
});