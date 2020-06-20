import React from "react";
import fs from "fs";

// página com detalhes
const Post = ({ slug }) => {
  return <div>the slug for this page is {slug}</div>;
};

// criar paths diferentes, fazer slug ?
export const getStaticPaths = () => {
  const files = fs.readdirSync("posts");
  console.log(files);
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};
// 11:07
// pegar parametros da busca // fetch data
export const getStaticProps = async ({ params: { slug } }) => {
  return {
    props: {
      slug,
    },
  };
};

export default Post;
