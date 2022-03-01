import React from "react";

export const Post = () => {
  return (
    <div className="bg-blue-200 mt-24 flex-col py-3.5 px-9 md:py-7 md:px-16">
      <div className="flex justify-between">
        <h3 className="text-4xl font-medium leading-tight">Recent Post</h3>
        <a className="rounded-xl py-2 px-2 no-underline text-white font-bold text-base bg-indigo-500 hover:bg-indigo-700" href="https://kadarisman.github.io">view All</a>
      </div>
      <div className="flex flex-col gap-4 mt-3 md:flex-row">
        <div className="bg-white px-5 py-6 rounded-xl">
          <h2 className="text-xl font-medium mt-6 mb-5">Membuat sistem desain dari awal</h2>
          <div className="text-base mb-2.5 leading-8">
            <span className="mr-5">15 Februari 2022</span> |
            <span className="ml-5">Desain, Teknologi</span>
          </div>
          <p className="text-base mb-2.5 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            sequi, recusandae nemo quia vel harum possimus! Quod aspernatur
            illum, nesciunt, molestiae atque magnam numquam totam culpa
            consequatur ullam pariatur optio!
          </p>
        </div>
        <div className="bg-white px-5 py-6 rounded-xl">
          <h2 className="text-xl font-medium mt-6 mb-5">Membuat sistem desain dari awal</h2>
          <div className="text-base mb-2.5 leading-8">
            <span className="mr-5">15 Februari 2022</span> |
            <span className="ml-5">Desain, Teknologi</span>
          </div>
          <p className="text-base mb-2.5 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            sequi, recusandae nemo quia vel harum possimus! Quod aspernatur
            illum, nesciunt, molestiae atque magnam numquam totam culpa
            consequatur ullam pariatur optio!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Post;
