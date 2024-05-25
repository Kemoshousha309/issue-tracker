import { Table } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import IssuesActions from "./issuesAction";


const LoadingPage = () => {
  const issues = [1, 2, 3, 4, 5];
  return (
    <>
      <IssuesActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="max-md:hidden">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="max-md:hidden">
              Description
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue}>
              <Table.RowHeaderCell>
                <Skeleton  />
              </Table.RowHeaderCell>
              <Table.Cell className="max-md:hidden">
                <Skeleton />
              </Table.Cell>
              <Table.Cell className="max-md:hidden">
                <Skeleton />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default LoadingPage;
