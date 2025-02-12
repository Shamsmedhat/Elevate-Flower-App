import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },

  providers: [
    Credentials({
      name: "credentials",
      credentials: {},
      authorize: async (credentials) => {
        console.log("credentials", credentials);

        return {
          id: "",
          message: "",
          token: "",
        };
      },
    }),
  ],
}