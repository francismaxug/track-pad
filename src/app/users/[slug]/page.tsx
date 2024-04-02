import React from "react";

const UuId = ({params}:{
  params: {
    slug: string;
  };

}) => {
  const id = params.slug;
  return <div>user {id}</div>;
};

export default UuId;
