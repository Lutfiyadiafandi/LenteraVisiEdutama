import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../../../components/atoms/Button";

jest.mock("react-router-dom", () => ({
  Link: ({ to, children }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
}));

describe("Button component", () => {
  it("should render a primary button correctly", () => {
    render(
      <Button variant="primary" to="/some-path" children="Primary Button" />
    );

    const buttonElement = screen.getByRole("link", { name: /primary button/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe("A");
    expect(buttonElement).toHaveAttribute("href", "/some-path");
    expect(buttonElement).toHaveTextContent("Primary Button");
  });

  it("should render a secondary button correctly", () => {
    render(
      <Button variant="secondary" to="/some-path" children="Secondary Button" />
    );

    const buttonElement = screen.getByRole("link", {
      name: /secondary button/i,
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe("A");
    expect(buttonElement).toHaveAttribute("href", "/some-path");
    expect(buttonElement).toHaveTextContent("Secondary Button");
  });
});
