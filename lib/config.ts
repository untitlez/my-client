export const Config = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  SIGNIN: {
    ADMIN: {
      USERNAME: process.env.NEXT_PUBLIC_ADMIN_USERNAME,
      PASSWORD: process.env.NEXT_PUBLIC_ADMIN_PASSWORD,
    },
    MEMBER: {
      USERNAME: process.env.NEXT_PUBLIC_MEMBER_USERNAME,
      PASSWORD: process.env.NEXT_PUBLIC_MEMBER_PASSWORD,
    },
  },
};
