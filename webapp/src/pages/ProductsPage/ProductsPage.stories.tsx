import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import { PRODUCTS_URL } from "../ApiHelper";

export default {
  title: "Products Page",
  component: ProductsPage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof ProductsPage>;

const Template: ComponentStory<typeof ProductsPage> = () => <ProductsPage />;

export const GetDataSuccess = Template.bind({});
GetDataSuccess.parameters = {
  mockData: [
    {
      url: PRODUCTS_URL,
      method: "GET",
      status: 200,
      response: {
        data: [
          {
            ProductID: 1,
            ProductName: "Hat",
            ProductPhotoURL:
              "https://cdn-icons-png.flaticon.com/512/6347/6347666.png",
            ProductStatus: "Active",
          },
          {
            ProductID: 2,
            ProductName: "Shoes",
            ProductPhotoURL:
              "https://cdn-icons-png.flaticon.com/512/8360/8360022.png",
            ProductStatus: "Active",
          },
          {
            ProductID: 3,
            ProductName: "Pants",
            ProductPhotoURL:
              "https://cdn-icons-png.flaticon.com/512/8359/8359965.png",
            ProductStatus: "Active",
          },
          {
            ProductID: 4,
            ProductName: "Shirt",
            ProductPhotoURL:
              "https://cdn-icons-png.flaticon.com/512/16835/16835561.png",
            ProductStatus: "Active",
          },
          {
            ProductID: 5,
            ProductName: "Coat",
            ProductPhotoURL:
              "https://cdn-icons-png.flaticon.com/512/10142/10142710.png",
            ProductStatus: "Active",
          },
          {
            ProductID: 511,
            ProductName: "Travel pillow",
            ProductPhotoURL:
              "https://cdn-icons-png.flaticon.com/512/10142/10142711.png",
            ProductStatus: "Active",
          },
          {
            ProductID: 52,
            ProductName: "Coat",
            ProductPhotoURL:
              "https://cdn-icons-png.flaticon.com/512/10142/10142710.png",
            ProductStatus: "InActive",
          },
          {
            ProductID: 51,
            ProductName: "Handbag",
            ProductPhotoURL: "",
            ProductStatus: "Active",
          },
        ],
        message: "",
      },
    },
  ],
};

export const GetDataSuccessEmpty = Template.bind({});
GetDataSuccessEmpty.parameters = {
  mockData: [
    {
      url: PRODUCTS_URL,
      method: "GET",
      status: 200,
      response: {
        data: [],
        message: "",
      },
    },
  ],
};

export const GetDataError = Template.bind({});
GetDataError.parameters = {
  mockData: [
    {
      url: PRODUCTS_URL,
      method: "GET",
      status: 500,
      response: {
        data: [],
        message: "Error",
      },
    },
  ],
};
