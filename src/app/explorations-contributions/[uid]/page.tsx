import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("explorations_and_contributions_post", params.uid)
    .catch(() => notFound());

  return (
    <Bounded as="article">
    <div className="rounded-xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20 tracking-wide ">
      <Heading as="h1">{page.data.title}</Heading>
      <div className="leading-relaxed"> </div>
      <div className="flex gap-4 mt-8 text-yellow-400">
        {page.tags.map((tag, index) => (
          <span key={index} className="text-lg font-bold">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">{page.data.date}</div>
      <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </div>
  </Bounded>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("explorations_and_contributions_post", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType(
    "explorations_and_contributions_post",
  );

  return pages.map((page) => {
    return { uid: page.uid };
  });
}