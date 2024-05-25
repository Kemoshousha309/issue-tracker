"use client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

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
  const { register, handleSubmit, control } = useForm<FormInputs>();
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
            setServerErr("");
          } catch (error) {
            const err = error as AxiosError;
            const errResponse = err.response?.data as ErrorResponse;
            const fieldErr = errResponse.errors.title || errResponse.errors.description;
            setServerErr(fieldErr._errors[0]);
          }
        })}
        className="space-y-4"
      >
        <TextField.Root placeholder="Issue Name" {...register("title")} />
        <Controller
          name="description"
          control={control}
          render={({ field }) => <SimpleMDE {...field} />}
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
