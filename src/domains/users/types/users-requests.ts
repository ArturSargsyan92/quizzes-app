export type SignUpPayload = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export type UpdateUser = {
  firstName?: string;
  lastName?: string;
};
