<script setup lang="ts">
import { useAuthStore } from "@/context/UseAuth";
import { reactive, ref } from "vue";
import { useToast } from "vue-toastification";
import * as yup from "yup";

const toast = useToast();
const authStore = useAuthStore();

const form = reactive({
  userName: "",
  password: "",
  email: "",
});

const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const validationSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  userName: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const errors = reactive<{ email?: string; userName?: string; password?: string }>({});
const isLoading = ref(false); // Thêm trạng thái loading

const handleLogin = async () => {
  isLoading.value = true;
  try {
    await validationSchema.validate(form, { abortEarly: false });
    await authStore.registerUser(form.email, form.userName, form.password);
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      errors.email = "";
      errors.userName = "";
      errors.password = "";
      err.inner.forEach((e) => {
        errors[e.path as keyof typeof errors] = e.message;
      });
    } else {
      toast.error("Register failed. Please try again.");
    }
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mb-20 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Sign up to your account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="handleLogin">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                v-model="form.email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
              />
              <p v-if="errors.userName" class="text-red-500">{{ errors.userName }}</p>
            </div>
            <div>
              <label
                for="username"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                v-model="form.userName"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Username"
              />
              <p v-if="errors.userName" class="text-red-500">{{ errors.userName }}</p>
            </div>
            <div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>

                <!-- Wrapper chứa input + button -->
                <div class="relative w-full">
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    id="password"
                    v-model="form.password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />

                  <!-- Nút toggle mật khẩu -->
                  <button
                    type="button"
                    @click="togglePassword"
                    class="absolute inset-y-0 right-2 flex items-center px-2 text-gray-600 dark:text-gray-300"
                  >
                    <svg
                      v-if="showPassword"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.875 18.825A10.06 10.06 0 0112 19c-4.418 0-8.418-2.632-10.342-6.5a11.784 11.784 0 015.43-5.43m3.885-.988a9.932 9.932 0 014.027 0m3.885.988a11.784 11.784 0 015.43 5.43A10.061 10.061 0 0112 19m-7-7l3-3m10 10l3-3"
                      />
                    </svg>
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.232 15.232a3.5 3.5 0 01-4.897-4.897m4.897 4.897L12 12m0 0a3.5 3.5 0 014.897-4.897M12 12a3.5 3.5 0 00-4.897-4.897M12 12a3.5 3.5 0 00-4.897 4.897M12 12l4.897 4.897M12 12l-4.897 4.897"
                      />
                    </svg>
                  </button>
                </div>
                <p v-if="errors.password" class="text-red-500">{{ errors.password }}</p>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <a
                href="#"
                class="text-sm text-white font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full text-white bg-lightGreen hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {{ isLoading ? "Signing in..." : "Sign up" }}
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?
              <a
                href="#"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Sign up</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
