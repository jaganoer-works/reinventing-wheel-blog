import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'プロジェクト一覧 | 車輪の再発明.com',
  description: '技術の深い理解を目指すエンジニアのプロジェクト一覧',
}


async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  return data;
}

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">プロジェクト一覧</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.slug}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href={`/projects/${project.slug}`}>詳細を見る</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
