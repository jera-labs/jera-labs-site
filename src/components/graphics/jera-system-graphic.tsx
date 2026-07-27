"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type JeraSystemGraphicProps = {
  className?: string;
};

export function JeraSystemGraphic({ className }: JeraSystemGraphicProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative mx-auto grid aspect-square w-full max-w-[18rem] place-items-center sm:max-w-[20rem] lg:max-w-[22rem]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_center,rgba(46,199,201,0.16)_0%,rgba(12,43,71,0.35)_42%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-[18%] rounded-full border border-soft-gray/[0.08]" />

      <span className="pointer-events-none absolute right-[20%] top-[20%] h-1.5 w-1.5 rounded-full bg-signal-orange/90" />
      <span className="pointer-events-none absolute bottom-[20%] left-[20%] h-1.5 w-1.5 rounded-full bg-tech-teal/70" />

      <motion.div
        className="relative z-10 h-[56%] w-[56%]"
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [-3, 3, -3] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <Image
          src="/brand/jera-mark.png"
          alt=""
          fill
          className="object-contain object-center"
          sizes="(max-width: 640px) 160px, 220px"
          priority
        />
      </motion.div>
    </div>
  );
}
