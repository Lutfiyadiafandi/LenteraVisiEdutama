import React from "react";
import { render, screen } from "@testing-library/react";
import IconBtn from "../../../components/atoms/IconBtn";

jest.mock("react-icons/fa", () => {
  const OriginalFaArrowRight =
    jest.requireActual("react-icons/fa").FaArrowRight;
  return {
    ...jest.requireActual("react-icons/fa"),
    FaArrowRight: () => <OriginalFaArrowRight data-testid="arrow-icon" />,
  };
});

describe("IconBtn component", () => {
  it("should render the title and FaArrowRight icon correctly", () => {
    const titleText = "Read More";
    render(<IconBtn title={titleText} />);

    const titleElement = screen.getByText(titleText);
    expect(titleElement).toBeInTheDocument();

    const iconElement = screen.getByTestId("arrow-icon");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement.tagName).toBe("svg");
  });
});
