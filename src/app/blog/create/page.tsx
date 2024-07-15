"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "@/hooks/useUser";
import { logout } from "@/lib/auth";

export default function CreateBlogPost() {
  const router = useRouter();
  const { user, loading } = useUser();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login"); // ログアウト後にログインページにリダイレクト
    } catch (error) {
      console.error("Logout failed:", error);
      // ここでエラーメッセージを表示するなどのエラーハンドリングを行うことができます
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null; // または適切なメッセージを表示
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-4">認証ページ</h1>
      <p className="mb-4">ようこそ、{user.email}さん！</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        ログアウト
      </button>
    </div>
  );
}
