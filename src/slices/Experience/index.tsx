import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Experience`.
 */
export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

/**
 * Component for "Experience" Slices.
 */
const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading as="h2" size="lg">
        {slice.primary.heading}
      </Heading>
      {slice.primary.repeatable_zone.map((item, index) => (
        <div key={index} className="ml-6 mt-8 not-prose md:ml-12 md:mt-16">
          <Heading as="h3" size="sm">
            {item.title}
          </Heading>

          <div className="mt-3 flex w-fit flex-col gap-1 text-2xl font-semibold tracking-normal text-slate-400">
            <span>{item.time_period}</span>{" "}
            <span className="text-3xl font-extralight"></span>{" "}
            <span>{item.institution}</span>
          </div>
          <div className="not-prose text-xl text-white mt-2">
            <PrismicRichText field={item.desc} />
          </div>
        </div>
      ))}
    </Bounded>
  );
};

export default Experience;