"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container py-8 text-center">
      <h2 className="text-2xl font-bold mb-4">
        ブログ記事の読み込み中にエラーが発生しました
      </h2>
      <Button onClick={() => reset()}>もう一度試す</Button>
    </div>
  );
}
