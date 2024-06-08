"use client"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  itemsCount: number;
  PageSize: number;
  currentPage: number;
}

const Pagination = ({ PageSize, currentPage, itemsCount }: Props) => {
  const currenParams = useSearchParams();
  const params = new URLSearchParams(currenParams.toString());
  const route = useRouter();
  const pageCount = Math.ceil(itemsCount / PageSize);
  if (pageCount === 0) return null;
  return (
    <Flex gap="3" align="center">
      <Text size="2">
        Page {currentPage} of {pageCount}
      </Text>
      <Flex gap="2">
        <Button
          color="gray"
          variant="soft"
          disabled={currentPage === 1}
          onClick={() => {
            params.set("page", "1");
            route.push("?" + params.toString());
          }}
        >
          <DoubleArrowLeftIcon />
        </Button>
        <Button
          color="gray"
          variant="soft"
          disabled={currentPage === 1}
          onClick={() => {
            params.set("page", (currentPage -  1).toString());
            route.push("?" + params.toString());
          }}
        >
          <ChevronLeftIcon />
        </Button>
        
        <Button
          color="gray"
          variant="soft"
          disabled={currentPage === pageCount}
          onClick={() => {
            params.set("page", (currentPage + 1).toString());
            route.push("?" + params.toString());
          }}
        >
          <ChevronRightIcon />
        </Button>
        <Button
          color="gray"
          variant="soft"
          disabled={currentPage === pageCount}
          onClick={() => {
            params.set("page", pageCount.toString());
            route.push("?" + params.toString());
          }}
        >
          <DoubleArrowRightIcon />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Pagination;
