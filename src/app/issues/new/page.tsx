"use client";
import { Button, Callout, TextField, Text, Spinner } from "@radix-ui/themes";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/schema";

interface FormInputs {
  title: string;
  description: string;
}

interface ErrorResponse {
  errors: {
    _errors: [];
    title: {
      _errors: string[];
    };
    description: {
      _errors: string[];
    };
  };
}

const NewIssuePage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({
    resolver: zodResolver(createIssueSchema),
  });
  const router = useRouter();
  const [serverErr, setServerErr] = useState("");
  return (
    <div className=" max-w-xl">
      {serverErr && (
        <Callout.Root className=" mb-4" color="red">
          <Callout.Text>{serverErr}</Callout.Text>
        </Callout.Root>
      )}
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", { ...data });
            router.push("/");
          } catch (error) {
            const err = error as AxiosError;
            const errResponse = err.response?.data as ErrorResponse;
            const fieldErr =
              errResponse.errors.title || errResponse.errors.description;
            setServerErr(fieldErr._errors[0]);
          }
        })}
        className="space-y-4"
      >
        <TextField.Root placeholder="Issue Name" {...register("title")} />
        {errors.title && (
          <Text as="p" color="red">
            {errors.title.message}
          </Text>
        )}
        <Controller
          name="description"
          control={control}
          render={({ field }) => <SimpleMDE {...field} />}
        />
        {errors.description && (
          <Text as="p" color="red">
            {errors.description.message}
          </Text>
        )}
        <Button disabled={isSubmitting} className="cursor-pointer">
          {" "}
          {isSubmitting && <Spinner />} Submit
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
