import axios from "axios";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const toast = useToast();
const router = useRouter();

export const handleError = (error: any) => {

  if (axios.isAxiosError(error)) {
    const err = error.response;
    if (Array.isArray(err?.data.errors)) {
      for (const val of err.data.errors) {
        toast.warning(val.description);
      }
    } else if (typeof err?.data.errors === "object") {
      for (const key in err.data.errors) {
        toast.warning(err.data.errors[key][0]);
      }
    } else if (err?.data) {
      toast.warning(err.data);
    } else if (err?.status === 401) {
      toast.warning("Please login");
      router.push("/login");
    } else if (err) {
      toast.warning(err?.data);
    }
  }
};
