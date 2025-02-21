import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { API_HEADERS } from "./lib/constants/headers.constant";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/",
    error: "/",
  },

  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        console.log("JSON.stringify(credentials)", JSON.stringify(credentials));
        const API_URL = process.env.API;
        const response = await fetch(API_URL + "/auth/signin", {
          method: "POST",
          cache: "no-cache",
          body: JSON.stringify(credentials),
          headers: {
            ...API_HEADERS,
          },
        });
        console.log("response form auth", response);
        // { email: credentials?.email, password: credentials?.password }
        const payload: APIResponse<LoginSuccessResponse> = await response.json();

        if ("message" in payload) {
          return {
            id: payload.user._id,
            token: payload.token,
            _id: payload.user._id,
            firstName: payload.user.firstName,
            lastName: payload.user.lastName,
            email: payload.user.email,
            gender: payload.user.gender,
            phone: payload.user.phone,
            photo: payload.user.photo,
            role: payload.user.role,
            createdAt: payload.user.createdAt,
          };
        }
        throw new Error(payload.error);
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.token = user.token;
        token._id = user._id;
        token.email = user.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.email = user.email;
        token.gender = user.gender;
        token.phone = user.phone;
        token.photo = user.photo;
        token.role = user.role;
      }
      return token;
    },

    session: async ({ session, token }) => {
      if (token) {
        session._id = token._id;
        session.email = token.email;
        session.firstName = token.firstName;
        session.lastName = token.lastName;
        session.email = token.email;
        session.gender = token.gender;
        session.phone = token.phone;
        session.photo = token.photo;
        session.role = token.role;
      }
      return session;
    },
  },
};
