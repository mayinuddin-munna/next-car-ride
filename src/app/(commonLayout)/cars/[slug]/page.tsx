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

  console.log({ searchParams });

  return (
    <div>
      <h1>
        CarsDetails {slug} {search}
      </h1>
    </div>
  );
};

export default CarsDetails;
