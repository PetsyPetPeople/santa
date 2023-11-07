import { REFRESH_TOKEN } from '@/graphql';
import { RefreshTokenMutation } from '@/libs/graphql';
import graphQLRequest from '@/libs/graphqlRequest';
import { getExpiresIn } from '@/utiils';
import { capitalize } from 'lodash';
import NextAuth, { AuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

async function refreshToken(token: JWT): Promise<JWT> {
  const response = await graphQLRequest<RefreshTokenMutation>(REFRESH_TOKEN, {
    refreshToken: token.backendTokens.refreshToken,
  });

  if (!response) return token;
  console.log('**** Refreshed ****');
  return {
    ...token,
    backendTokens: {
      ...response.refreshTokens,
      expiresIn: getExpiresIn(),
    },
  };
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credentials) {
        const user = {
          email: 'dan.t@petsy.com.au',
          password: 'dan@123',
        };

        if (credentials?.email === user.email && credentials?.password === user.password) {
          const name = capitalize(credentials.email.split('@')[0]);

          return {
            id: user.email,
            user: {
              id: user.email,
              name: name,
              email: user.email,
            },
          };
        }

        // if (credentials?.email && credentials.password) {
        //   const response = await graphQLRequest<UserLoginMutation>(USER_LOGIN, {
        //     data: { email: credentials.email, password: credentials.password },
        //   });

        //   if (!response?.loginUser) return null;

        //   const name = capitalize(credentials.email.split('@')[0]);

        //   return {
        //     id: credentials.email,
        //     user: {
        //       id: credentials.email,
        //       name,
        //       email: credentials.email,
        //     },
        //     backendTokens: {
        //       ...response.loginUser,
        //       expiresIn: getExpiresIn(10),
        //     },
        //   };
        // }

        return null;
      },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) return { ...token, ...user };

  //     if (new Date().getTime() < token.backendTokens.expiresIn) return token;

  //     return await refreshToken(token);
  //   },

  //   async session({ token, session }) {
  //     session.user = token.user;
  //     session.backendTokens = token.backendTokens;

  //     return session;
  //   },
  // },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    error: '/error',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
