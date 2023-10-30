import { gql } from 'graphql-request';

export const USER_LOGIN = gql`
  mutation UserLogin($data: UserLoginInput!) {
    loginUser(data: $data) {
      accessToken
      refreshToken
    }
  }
`;

export const REFRESH_TOKEN = gql`
  mutation RefreshToken($refreshToken: String!) {
    refreshTokens(refreshToken: $refreshToken) {
      accessToken
      refreshToken
    }
  }
`;
