// src/app/page.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";

// Next.jsのメタデータをモック
jest.mock("next/head", () => {
  return {
    // __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

// Linkコンポーネントをモック
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe("Home", () => {
  it("トップページのテスト", () => {
    render(<Home />);
    const heading = screen
      .getByRole("heading", { name: /車輪の再発明.com へようこそ/i })
      .closest("h1");
    expect(heading).toHaveClass("text-4xl font-bold mb-6");
    expect(heading).toBeInTheDocument();
    const description = screen
      .getByText(/技術の深い理解を目指して/i)
      .closest("p");
    expect(description).toHaveClass("text-xl mb-8");
    expect(description).toBeInTheDocument();
    const blogLink = screen
      .getByRole("link", { name: /ブログを読む/i })
      .closest("a");
    expect(blogLink).toBeInTheDocument();
    expect(blogLink).toHaveAttribute("href", "/blog");
  });
});
