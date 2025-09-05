import {Project} from "@/types/project" 
import {createClient, groq} from "next-sanity";
import clientConfig from "./schemas/config/client-config";


export async function getProjects(): Promise<Project[]> {
  try {
    const projects = await createClient(clientConfig).fetch(
        groq`*[_type == "project"]
        {
        _id,
        _createdAt,
        title,
        author,
        "slug": slug.current,
        "frontcover": frontcover.asset->url,
        alt,
        content,
    }`);
     // Fallback in case something goes wrong and `projects` is null
    return projects ?? [];
  } catch (error) {
    console.error("Failed to fetch publications:", error);
    return []; // Prevents crash from null
  }
}

export async function getProject(slug: string): Promise<Project> {
return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0] 
        {
        _id,
        _createdAt,
        title,
        author,
        "slug": slug.current,
        "frontcover": frontcover.asset->url,
        alt,
        content,
        }`, {slug}
    )
}