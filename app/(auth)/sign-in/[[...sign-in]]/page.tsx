import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage: React.FC = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default SignInPage;
