import React from "react";

const Skill = () => {
  return (
    <div className="py-3.5 px-9 md:py-7 md:px-16">
      <div className="flex justify-center">
        <h3 className="text-4xl font-medium leading-tight mb-9">Skills</h3>
      </div>
      <div className="flex justify-center flex-col md:flex-row gap-8">

        <div className="flex justify-center flex-row gap-8">

          <div className="">
            <img className="h-15 w-20" src="img/icon/nodejs.png" alt="node js" />
          </div>

          <div className="">
            <img className="h-15 w-20" src="img/icon/nextjs.png" alt="node js" />
          </div>

          <div className="">
            <img className="h-10 w-10" src="img/icon/laravel.png" alt="laravel" />
          </div>

          <div className="">
            <img className="h-10 w-15" src="img/icon/codeigniter.png" alt="codeigniter" />
          </div>

        </div>

        <div className="flex justify-center flex-row gap-8">

          <div className="">
            <img className="h-10 w-11" src="img/icon/react.png" alt="react" />
          </div>

          <div className="">
            <img className="h-9 w-15" src="img/icon/jquery.png" alt="jquery" />
          </div>

          <div className="">
            <img className="h-8 w-12" src="img/icon/tailwindcss.png" alt="tailwindcss" />
          </div>

          <div className="">
            <img className="h-8 w-8" src="img/icon/bootstrap.png" alt="bootstrap" />
          </div>

        </div>

        <div className="flex justify-center flex-row gap-8">

          <div className="">
            <img className="h-9 w-15" src="img/icon/mysql.png" alt="mysql" />
          </div>

          <div className="">
            <img className="h-9 w-15" src="img/icon/mongodb.png" alt="mongodb" />
          </div>

          <div className="">
            <img className="h-9 w-15" src="img/icon/docker.png" alt="docker" />
          </div>

          <div className="">
            <img className="h-9 w-15" src="img/icon/kubernetes.png" alt="kubernetes" />
          </div>

        </div>

      </div>
      <p className="text-center font-bold mt-10">
        Node Js, Next Js, Laravel, Codeigniter, React Js, Jquery. Tailwind Css, Bootstrap, Mysql, Mongo Db, Docker, Kubernetes
      </p>
      <p className="text-center font-bold mt-10">Sekarang fokus pengembangan Skill sebagai Full Stack Javascript Web Developer</p>
    </div>
  );
};
export default Skill;
