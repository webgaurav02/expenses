
import { User as NextAuthUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Add the 'id' field to the user object
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User extends NextAuthUser {
    id: string; // Add the 'id' field to the User object
  }
}
