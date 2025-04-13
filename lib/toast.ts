import useToastStore, { ToastType } from "./toastStore"

export const toast = (message: string, type: ToastType) => {

    useToastStore.getState().addToast(message, type)

}