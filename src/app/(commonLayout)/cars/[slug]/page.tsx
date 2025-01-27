import React from "react";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const CarsDetails = async ({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) => {
  const { slug } = await params;
  const { search } = await searchParams;

  const res = await fetch(`http://localhost:5000/api/v1/cars/${params.slug}`, {
    next: {},
    cache: "no-store",
  });

  const posts = await res.json();

  console.log(posts);
  

  return (
    <div>
      <h1>
        CarsDetails {posts?.data?.name}
      </h1>
    </div>
  );
};

export default CarsDetails;
