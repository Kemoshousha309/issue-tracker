"use client"
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const statusList: {label: string, value?: Status}[] = [
    {label: "All"},
    {label: "Open", value: "OPEN"},
    {label: "In Progress", value: "IN_PROGRESS"},
    {label: "Closed", value: "CLOSED"}
]

const StatusFilter = () => {
    const currentParams = useSearchParams()
    const route = useRouter()
  return (
    <Select.Root defaultValue="all" onValueChange={(value)=>{
        const params = new URLSearchParams()
        if(currentParams.get("orderBy") ){
            params.append("orderBy", currentParams.get("orderBy")!)
        }
        params.append("status", value)
        route.push("/issues/list"+params.toString() ? "?" + params.toString(): "")
    }}>
      <Select.Trigger />
      <Select.Content>
        {statusList.map(s => (
          <Select.Item key={s.label} value={s.value ?? "all"}>{s.label}</Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default StatusFilter;
