import { v4 as uuidv4 } from 'uuid'
import {create} from "zustand";

export type ToastType = "success" | "failure"

type Toast = {
    id: string,
    type: ToastType,
    message: string
}

type ToastStore = {
    toasts: Toast[]
    addToast:(message: string, type: ToastType) => void
    removeToast: (id: string) => void
}

const useToastStore = create<ToastStore>((set) => ({
    toasts: [],
    addToast: (message, type) => {
        const id = uuidv4();
        set((state) => ({
            toasts: [{id, message, type}, ...state.toasts]
        }))

        setTimeout(() => {
            setTimeout(() => {
                set((state) => ({
                    toasts: state.toasts.filter((toast) => toast.id !== id)
                }))
            }, 3000)
        })
    },
    removeToast: (id) => {
        set((state) => ({
            toasts: state.toasts.filter((toast) => toast.id !=id)
        }))

    }
    


    }))

export default useToastStore
