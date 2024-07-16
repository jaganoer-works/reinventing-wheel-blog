import { render, screen } from "@testing-library/react";
import Header from "./Header";

jest.mock("./ThemeToggle", () => ({
  ThemeToggle: () => <div>ThemeToggle</div>,
}));

describe("Header", () => {
  it("renders the header", () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass(
      "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    );
  });
  it("renders the theme toggle", () => {
    render(<Header />);
    const themeToggle = screen.getByText("ThemeToggle");
    expect(themeToggle).toBeInTheDocument();
  });
  it("renders the title", () => {
    render(<Header />);
    const heading = screen.getByText("車輪の再発明.com");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("text-2xl font-bold");
  });
});
