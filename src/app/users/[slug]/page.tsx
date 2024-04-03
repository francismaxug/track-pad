import React from "react";
import { useSearchParams } from "next/navigation";
const UuId = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const id = params.slug;
  const searchParams = useSearchParams();
  const sort = searchParams.get("sortOrder");
  console.log(sort);
  return <div>user {id}</div>;
};

export default UuId;
