import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";

interface UserData {
  login: string;
  name: string;
  avatar_url: string;
  email: string | null;
  bio: string | null;
  followers: number;
  following: number;
}

export interface RepoData {
  id: number;
  name: string;
  login: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export interface RepoDetails {
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
}

interface UserState {
  userData: UserData | null;
  repos: RepoData[];
  repoDetails: RepoDetails | null;
}

const initialState: UserState = {
  userData: null,
  repos: [],
  repoDetails: null,
};

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (username: string) => {
    const response = await api.get(`users/${username}`);

    return {
      login: response.data.login,
      name: response.data.name,
      avatar_url: response.data.avatar_url,
      email: response.data.email,
      bio: response.data.bio,
      followers: response.data.followers,
      following: response.data.following,
    };
  }
);

export const fetchUserRepos = createAsyncThunk(
  "user/fetchUserRepos",
  async (username: string) => {
    const response = await api.get(
      `users/${username}/repos?sort=stars&order=asc`
    );

    return response.data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      login: repo.owner.login,
      description: repo.description,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      language: repo.language,
    }));
  }
);

export const fetchRepoDetails = createAsyncThunk(
  "user/fetchRepoDetails",
  async ({ username, repo }: { username: string; repo: string }) => {
    const response = await api.get(`/repos/${username}/${repo}`);

    return {
      name: response.data.name,
      description: response.data.description,
      stargazers_count: response.data.stargazers_count,
      forks_count: response.data.forks_count,
      language: response.data.language,
      html_url: response.data.html_url,
    };
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.userData = action.payload;
      })
      .addCase(fetchUserRepos.fulfilled, (state, action) => {
        state.repos = action.payload;
      })
      .addCase(fetchRepoDetails.fulfilled, (state, action) => {
        state.repoDetails = action.payload;
      });
  },
});

export default userSlice.reducer;
