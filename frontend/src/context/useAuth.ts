import type { UserProfile } from "@/models/User";
import { loginAPI, registerAPI } from "@/services/AuthService";
import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

export const useAuthStore = defineStore("auth", () => {
  const toast = useToast();
  const router = useRouter();
  // const user = ref(JSON.parse(localStorage.getItem("user") || "null"));
  const user = ref<UserProfile | null>(
    JSON.parse(localStorage.getItem("user") || "null")
  );
  const token = ref(localStorage.getItem("token") || null);
  const isReady = ref(false);

  const updateAuthHeader = () => {
    if (token.value && user.value) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token.value}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  // Kiểm tra dữ liệu từ localStorage khi ứng dụng khởi động
  const initAuth = () => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      user.value = JSON.parse(storedUser);
      token.value = storedToken;
      updateAuthHeader();
    }
    isReady.value = true;
  };

  // Cập nhật headers khi token thay đổi
  watch(token, updateAuthHeader);

  // Hàm lưu dữ liệu auth vào localStorage
  const setAuthData = (userObj: UserProfile, newToken: string) => {
    localStorage.setItem("user", JSON.stringify(userObj));
    localStorage.setItem("token", newToken);
    user.value = userObj;
    token.value = newToken;
  };

  // Đăng ký tài khoản
  const registerUser = async (email: string, username: string, password: string) => {
    try {
      const res = await registerAPI(email, username, password);
      if (res) {
        localStorage.setItem("token", res.data.token);
        const userObj = { userName: res.data.userName, email: res.data.email };
        setAuthData(userObj, res.data.token);
        toast.success("Register Success!");
        router.push("/search");
      }
    } catch (e) {
      toast.warning("Server error occurred");
    }
  };

  // Đăng nhập
  const loginUser = async (username: string, password: string) => {
    try {
      const res = await loginAPI(username, password);
      if (res) {
        const userObj = { userName: res.data.userName, email: res.data.email };
        setAuthData(userObj, res.data.token);
        toast.success("Login Success!");
        router.push("/search");
      }
    } catch (e) {
      toast.warning("Server error occurred");
    }
  };

  // Kiểm tra xem user đã đăng nhập hay chưa
  const isLoggedIn = computed(() => !!user.value);

  // Đăng xuất
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    user.value = null;
    token.value = "";
    updateAuthHeader();
    router.push("/");
  };

  // const refreshToken = async () => {
  //   try {
  //     const res = await refreshTokenAPI();
  //     if (res) {
  //       token.value = res.data.token;
  //       localStorage.setItem("token", res.data.token);
  //       axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
  //     }
  //   } catch (e) {
  //     console.error("Failed to refresh token", e);
  //     logout(); // Nếu refresh thất bại, đăng xuất người dùng
  //   }
  // };

  return { user, token, loginUser, registerUser, logout, isLoggedIn, isReady, initAuth };
});
