import { rest } from "msw";
import { setupServer } from "msw/node";
import { PRODUCTS_URL } from "../ApiHelper";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductsPage from "./ProductsPage";

describe("ProductsPage", () => {
  it("shouldDisplayLoadingSpinner", () => {
    render(
      <MemoryRouter>
        <ProductsPage />
      </MemoryRouter>
    );
    expect(screen.getByTestId(`loading-spinner-container`)).toBeInTheDocument();
  });
  it("shouldDisplayProductsContainer", async () => {
    // set up mock for axios.get
    const response = {
      data: [
        {
          ProductID: 1,
          ProductName: "Hat",
          ProductPhotoURL:
            "https://cdn-icons-png.flaticon.com/512/6347/6347666.png",
          ProductStatus: "Active",
        },
      ],
      message: "",
    };
    const server = setupServer(
      rest.get(PRODUCTS_URL, (_req, res, ctx) => {
        return res(ctx.status(200), ctx.json(response));
      })
    );
    server.listen();
    render(
      <MemoryRouter>
        <ProductsPage />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByTestId(`products-container`)).toBeInTheDocument();
    });
    server.close();
  });
  it("shouldDisplayErrorMessage", async () => {
    // set up mock for axios.get
    const response = {
      data: [],
      message: "Error",
    };
    const server = setupServer(
      rest.get(PRODUCTS_URL, (_req, res, ctx) => {
        return res(ctx.status(500), ctx.json(response));
      })
    );
    server.listen();
    render(
      <MemoryRouter>
        <ProductsPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId(`error-container`)).toBeInTheDocument();
    });
    server.close();
  });
});
