"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React, { useLayoutEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

gsap.registerPlugin(ScrollTrigger);
/**
 * Props for `TechList1`.
 */
export type TechList1Props = SliceComponentProps<Content.TechList1Slice>;

/**
 * Component for "TechList1" Slices.
 */
const TechList1 = ({ slice }: TechList1Props): JSX.Element => {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true, // pin the trigger element while active
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power0.inOut",
        },
      );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="wrapper overflow-hidden"
      ref={component}
    >
      <Bounded as="div">
        <Heading size="lg" className="mb-7" as="h2" letterSpacing="wider">
          {slice.primary.heading}
        </Heading>
      </Bounded>

      {slice.primary.repeatable_zone.map((item, index) => (
        <div
          key={index}
          className="tech-row mb-6 flex items-center justify-center gap-2 text-slate-700"
          aria-label={item.tech_name || ""}
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  "tech-item text-8xl font-bold uppercase tracking-wide"
                }
                style={{
                  color: index === 7 && item.tech_color ? item.tech_color : "inherit",
                }}
              >
                {item.tech_name}
              </span>
              <span className="text-3xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TechList1;
