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
import { supabase } from "@/lib/supabase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ記事一覧 | 車輪の再発明.com",
  description: "技術の深い理解を目指すエンジニアのブログ記事一覧",
};

async function getBlogPosts() {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }

  return data;
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">ブログ記事一覧</h1>
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>
                {new Date(post.published_at).toLocaleDateString()}
              </CardDescription>
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
