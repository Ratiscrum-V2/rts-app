import { toast, ToastOptions } from "react-toastify"

const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
}

export const toastSuccess = (message: string): void => {
    toast.success(message, {
        ...toastOptions
    });
}

export const toastError = (message: string): void => {
    toast.error(message, {
        ...toastOptions
    })
}