import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "車輪の再発明.com",
  description: "技術の深い理解を目指すエンジニアのブログ",
};

export default function Home() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-6">車輪の再発明.com へようこそ</h1>
      <p className="text-xl mb-8">
        このサイトでは、技術の深い理解を目指して様々な「車輪の再発明」に挑戦する過程で
        学んだことや気づきを共有していきます。
      </p>
      <div className="flex space-x-4">
        <Button asChild>
          <Link href="/projects">プロジェクトを見る</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/blog">ブログを読む</Link>
        </Button>
      </div>
    </div>
  );
}
