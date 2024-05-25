import { Text } from "@radix-ui/themes";
import React, { PropsWithChildren } from "react";

const FieldErrorMessage = ({ children }: PropsWithChildren) => {
    if(!children) return null;
  return (
    <Text as="p" color="red">
      children
    </Text>
  );
};

export default FieldErrorMessage;
