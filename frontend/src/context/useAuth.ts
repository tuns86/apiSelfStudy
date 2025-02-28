import { loginAPI, registerAPI } from "@/services/AuthService";
import axios from "axios";
import { defineStore } from "pinia";
import { computed, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

export const useAuthStore = defineStore("auth", () => {
  const toast = useToast();
  const router = useRouter();
  const user = ref(JSON.parse(localStorage.getItem("user") || "null"));
  const token = ref(localStorage.getItem("token") || null);
  const isReady = ref(false);

  // Cập nhật Authorization Header khi token thay đổi
  watch(token, (newToken) => {
    try {
      if (newToken) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
      } else {
        delete axios.defaults.headers.common["Authorization"];
      }
    } catch (error) {
      console.error("Failed to set Authorization header:", error);
    }
  });

  // Kiểm tra dữ liệu từ localStorage khi ứng dụng khởi động
  onMounted(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      user.value = JSON.parse(storedUser);
      token.value = storedToken;
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    }
    isReady.value = true;
  });

  if (token.value) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token.value}`;
  }

  // Đăng ký tài khoản
  const registerUser = async (email: string, username: string, password: string) => {
    try {
      const res = await registerAPI(email, username, password);
      if (res) {
        localStorage.setItem("token", res.data.token);
        const userObj = { userName: res.data.userName, email: res.data.email };
        localStorage.setItem("user", JSON.stringify(userObj));
        token.value = res.data.token;
        user.value = userObj;
        toast.success("Register Success!");
        router.push("/search");
      }
    } catch (e) {
      toast.warning("Server error occured");
    }
  };

  // Đăng nhập
  const loginUser = async (username: string, password: string) => {
    try {
      const res = await loginAPI(username, password);
      if (res) {
        localStorage.setItem("token", res.data.token);
        const userObj = { userName: res.data.userName, email: res.data.email };
        localStorage.setItem("user", JSON.stringify(userObj));
        token.value = res.data.token;
        user.value = userObj;
        toast.success("Login Success!");
        router.push("/search");
      }
    } catch (e) {
      toast.warning("Server error occured");
    }
  };

  // Kiểm tra xem user đã đăng nhập hay chưa
  const isLoggedIn = computed(() => !!user.value);

  // Đăng xuất
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    user.value = null;
    token.value = null;
    delete axios.defaults.headers.common["Authorization"];
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

  return { user, token, loginUser, registerUser, logout, isLoggedIn, isReady };
});
