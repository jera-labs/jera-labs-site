"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type JeraSystemGraphicProps = {
  className?: string;
  /** Lighter loop for mobile backdrops — fewer moving parts */
  ambient?: boolean;
};

const stars = [
  { top: "12%", left: "18%", size: 1.5, delay: 0 },
  { top: "22%", left: "78%", size: 1, delay: 1.2 },
  { top: "68%", left: "12%", size: 1.5, delay: 0.6 },
  { top: "74%", left: "82%", size: 1, delay: 2.1 },
  { top: "40%", left: "8%", size: 1, delay: 1.8 },
  { top: "48%", left: "90%", size: 1.5, delay: 0.3 },
] as const;

export function JeraSystemGraphic({
  className,
  ambient = false,
}: JeraSystemGraphicProps) {
  const prefersReducedMotion = useReducedMotion();
  const animate = !prefersReducedMotion;
  const visibleStars = ambient ? stars.slice(0, 3) : stars;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative mx-auto grid aspect-square w-full max-w-[18rem] place-items-center sm:max-w-[20rem] lg:max-w-[22rem]",
        className,
      )}
    >
      <motion.div
        className="pointer-events-none absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_center,rgba(46,199,201,0.2)_0%,rgba(12,43,71,0.4)_40%,transparent_72%)]"
        animate={
          animate
            ? { opacity: [0.55, 0.9, 0.55], scale: [0.98, 1.03, 0.98] }
            : undefined
        }
        transition={
          animate
            ? { duration: ambient ? 9 : 7, repeat: Infinity, ease: "easeInOut" }
            : undefined
        }
      />

      {visibleStars.map((star, index) => (
        <motion.span
          key={index}
          className="pointer-events-none absolute rounded-full bg-ivory-white"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          animate={
            animate
              ? { opacity: [0.15, 0.85, 0.15], scale: [0.8, 1.2, 0.8] }
              : { opacity: 0.35 }
          }
          transition={
            animate
              ? {
                  duration: 3.5 + index * 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: star.delay,
                }
              : undefined
          }
        />
      ))}

      {!ambient ? (
        <>
          <motion.div
            className="pointer-events-none absolute inset-[14%] rounded-full border border-soft-gray/[0.12]"
            animate={animate ? { rotate: 360 } : undefined}
            transition={
              animate
                ? { duration: 48, repeat: Infinity, ease: "linear" }
                : undefined
            }
          >
            <span className="absolute left-1/2 top-0 h-px w-[18%] -translate-x-1/2 bg-gradient-to-r from-transparent via-tech-teal/50 to-transparent" />
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-[18%]"
            animate={animate ? { rotate: 360 } : undefined}
            transition={
              animate
                ? { duration: 18, repeat: Infinity, ease: "linear" }
                : undefined
            }
          >
            <span className="absolute right-[8%] top-[10%] h-2 w-2 rounded-full bg-signal-orange shadow-[0_0_10px_rgba(241,90,36,0.55)]" />
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-[22%]"
            animate={animate ? { rotate: -360 } : undefined}
            transition={
              animate
                ? { duration: 26, repeat: Infinity, ease: "linear" }
                : undefined
            }
          >
            <span className="absolute bottom-[12%] left-[10%] h-1.5 w-1.5 rounded-full bg-tech-teal shadow-[0_0_8px_rgba(46,199,201,0.55)]" />
          </motion.div>
        </>
      ) : (
        <div className="pointer-events-none absolute inset-[18%] rounded-full border border-soft-gray/[0.1]" />
      )}

      <div className="pointer-events-none absolute inset-[20%] rounded-full border border-tech-teal/[0.08]" />

      <motion.div
        className="relative z-10 h-[56%] w-[56%]"
        animate={
          animate
            ? {
                y: ambient ? [-2, 2, -2] : [-4, 4, -4],
                scale: ambient ? [1, 1.02, 1] : [1, 1.03, 1],
                filter: [
                  "drop-shadow(0 0 12px rgba(46,199,201,0.18))",
                  "drop-shadow(0 0 22px rgba(46,199,201,0.35))",
                  "drop-shadow(0 0 12px rgba(46,199,201,0.18))",
                ],
              }
            : undefined
        }
        transition={
          animate
            ? {
                duration: ambient ? 10 : 8,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
      >
        <Image
          src="/brand/jera-mark.png"
          alt=""
          fill
          className="object-contain object-center"
          sizes="(max-width: 1023px) 160px, 220px"
          priority
        />
      </motion.div>
    </div>
  );
}
