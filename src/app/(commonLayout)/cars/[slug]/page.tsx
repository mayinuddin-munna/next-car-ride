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

  console.log({ searchParams });

  return (
    <div>
      <h1>CarsDetails {slug} {searchParams.search}</h1>
    </div>
  );
};

export default CarsDetails;
