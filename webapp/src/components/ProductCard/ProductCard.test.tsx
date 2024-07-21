import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { Product } from "../interfaces";

describe("Active Product Card with image url", () => {
  it("rendersActiveProductCard", async () => {
    const ProductID = 123456;
    const props: Product = {
      ProductID,
      ProductName: "Hat",
      ProductPhotoURL:
        "https://cdn-icons-png.flaticon.com/512/6347/6347666.png",
      ProductStatus: "Active",
    };
    render(<ProductCard {...props} />);
    expect(screen.getByTestId(`product-card-${ProductID}`)).toBeInTheDocument();
    expect(
      screen.getByTestId(`product-image-${ProductID}`)
    ).toBeInTheDocument();
    expect(screen.getByTestId(`product-name-${ProductID}`)).toBeInTheDocument();
    expect(screen.getByText("ID: " + ProductID)).toBeInTheDocument();
  });
});
describe("InActive Product Card without image url", () => {
  it("rendersInActiveProductCard", async () => {
    const ProductID = 123457;
    const props: Product = {
      ProductID,
      ProductName: "Hat",
      ProductPhotoURL: "",
      ProductStatus: "InActive",
    };
    render(<ProductCard {...props} />);
    expect(
      screen.getByTestId(`product-image-${ProductID}`)
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://cdn-icons-png.flaticon.com/512/13434/13434972.png"
    );
    expect(
      screen.getByText("ID: " + ProductID + " (Inactive)")
    ).toBeInTheDocument();
  });
});
