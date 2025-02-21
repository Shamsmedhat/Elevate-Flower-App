declare interface User extends Pick<DataBaseFields, "createdAt"> {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: "male" | "female";
  phone: string;
  photo?: string;
  role: string;
}

declare interface LoginSuccessResponse {
  user: User;
  token: string;
}
