import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': '118eba35-d114-41d8-894b-1614bc1b7a9d' },
});
export const usersApi = {
  getUsers(page, count) {
    return instance.get(`users?page=${page}&count=${count}`).then((response) => {
      return response.data;
    });
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  followUsers(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  unfollowUsers(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  setProfileStatus(userId) {
    return instance.get(`/profile/status/${userId}`).then((response) => {
      return response.data;
    });
  },
  updateStatus(status) {
    return instance.put(`/profile/status`, { status: status }).then((response) => {
      return response.data;
    });
  },
};
export const authApi = {
  me() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  login(email, password, rememberMe) {
    return instance.post(`/auth/login`, { email, password, rememberMe }).then((response) => {
      return response.data;
    });
  },
};
