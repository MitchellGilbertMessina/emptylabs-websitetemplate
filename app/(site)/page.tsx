import {getProjects} from "@/sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
   <div className="max-w-5xl mx-auto py-20">
    <h1 className="text-7xl font-extrabold">Hello I'm <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-trasnaprent">Mitchell!</span></h1>

    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols3 gap-8">
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`}
        key={project._id} className="border border-gray-500 rounded-lg p-3">

          {project.frontcover && (
            <Image
            src={project.frontcover}
            alt={project.alt}
            width={200}
            height={200}
          className="object-cover rounded-lg" 
        />
      )}
        <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">{project.title}</div>
        </Link>
      ))}
    </div>
   </div>
  );
}
