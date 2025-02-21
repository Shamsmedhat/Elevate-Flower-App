/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: "male" | "female";
    phone: string;
    photo?: string;
    role: string;
  }

  interface User extends Pick<DataBaseFields, "createdAt"> {
    token: string;
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: "male" | "female";
    phone: string;
    photo?: string;
    role: string;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    _id: string;
    token: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: "male" | "female";
    phone: string;
    photo?: string;
    role: string;
  }
}
