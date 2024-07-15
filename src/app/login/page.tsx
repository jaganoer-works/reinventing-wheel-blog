"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/lib/supabase";

// バリデーションスキーマの定義
const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "メールアドレスは必須です" })
    .email({ message: "有効なメールアドレスを入力してください" }),
  password: z
    .string()
    .min(1, { message: "パスワードは必須です" })
    .min(8, { message: "パスワードは8文字以上である必要があります" }),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setSubmitError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      if (error) throw error;
      router.push("/");
    } catch (error) {
      console.error("Error logging in:", error);
      setSubmitError("ログイン情報が無効です。もう一度お試しください。");
    }
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-4">ログイン</h1>
      {submitError && <p className="text-red-500 mb-4">{submitError}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-2">
            メールアドレス
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className={`w-full p-2 border rounded ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block mb-2">
            パスワード
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className={`w-full p-2 border rounded ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          ログイン
        </button>
      </form>
    </div>
  );
}
