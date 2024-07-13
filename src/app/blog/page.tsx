import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// これはダミーデータです。実際のアプリケーションではデータベースやAPIから取得します。
const blogPosts = [
  {
    slug: "why-i-started-making-os",
    title: "OSを作り始めた理由",
    date: "2024-07-10",
    summary:
      "なぜOSを自作することにしたのか、その動機と目標について書きました。",
  },
  {
    slug: "calculator-day-1",
    title: "新しい言語での電卓作成 - 1日目",
    date: "2024-07-05",
    summary:
      "新しい言語を学ぶために電卓を作り始めました。初日の苦労と発見を共有します。",
  },
  // 他のブログ記事を追加...
];

export default function BlogPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">ブログ記事一覧</h1>
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Card key={post.slug}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.summary}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/blog/${post.slug}`}>続きを読む</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
