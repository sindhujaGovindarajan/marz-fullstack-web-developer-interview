import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DragDropContext } from "react-beautiful-dnd";
import ProductCard from "./ProductCard";

export default {
  title: "Product Card",
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

const getArgs = (ProductStatus: string) => ({
  ProductID: 123456,
  ProductName: "Hat",
  ProductPhotoURL: "https://cdn-icons-png.flaticon.com/512/6347/6347666.png",
  ProductStatus,
});

export const InActive = Template.bind({});
InActive.args = getArgs("InActive");

export const Active = Template.bind({});
Active.args = getArgs("Active");
