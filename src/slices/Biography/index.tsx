import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Button from "@/components/Button";
import { PrismicNextImage } from "@prismicio/next";
import Avatar from "@/components/Avatar";
/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }: BiographyProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading as="h1" size="lg" className="col-start-1" letterSpacing = "wider" >
          {slice.primary.heading}
        </Heading>
        <div className="prose text-white prose-lg prose-slate prose-invert col-start-1 text-lg " style={{ lineHeight: '2.0' }}>
          <PrismicRichText field={slice.primary.description}/>
        </div>
        <Button
          linkField={slice.primary.button_link}
          label={slice.primary.button_text}
        />

        <Avatar
          image={slice.primary.avatar}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"/>
      </div>
    </Bounded>
  );
};

export default Biography;
