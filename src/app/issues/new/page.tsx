"use client";
import { Button, TextField } from "@radix-ui/themes";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface FormInputs {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, handleSubmit, control } = useForm<FormInputs>();
    const router = useRouter()
  return (
    <form
      onSubmit={handleSubmit((data) => {
        axios.post("/api/issues", { ...data });
        router.push("/")
      })}
      className="space-y-4 max-w-xl"
    >
      <TextField.Root placeholder="Search the docs…" {...register("title")} />
      <Controller
        name="description"
        control={control}
        render={({ field }) => <SimpleMDE {...field} />}
      />
      <Button>Submit</Button>
    </form>
  );
};

export default NewIssuePage;
