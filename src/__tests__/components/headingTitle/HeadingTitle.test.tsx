import React from "react";
import { render, screen } from "@testing-library/react";
import HeadingTitle from "../../../components/atoms/HeadingTitle";

describe("Heading Title", () => {
  it("should handle render with text props", () => {
    render(<HeadingTitle title="Lutfiyadi Afandi" />);
    const headingTitle = screen.getByText(/Lutfiyadi Afandi/i);
    expect(headingTitle).toBeInTheDocument();
  });
});
