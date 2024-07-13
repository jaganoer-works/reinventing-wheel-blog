import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// これはダミーデータです。実際のアプリケーションではデータベースやAPIから取得します。
const projects = [
  {
    slug: "self-made-os",
    title: "自作OS",
    description: "ゼロからOSを作る挑戦",
  },
  {
    slug: "calculator-in-new-lang",
    title: "新言語で電卓",
    description: "プログラミング言語の基礎を学ぶ",
  },
  // 他のプロジェクトを追加...
];

export default function ProjectsPage() {
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
