import * as React from "react";
import { cn } from "@/lib/utils"; // optional helper

// Configurable toast settings
const TOAST_LIMIT = 3; // show up to 3 at once (instead of 1)
const TOAST_REMOVE_DELAY = 5000; // 5s auto-remove

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const toastTimeouts = new Map();

const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) return;

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({ type: "REMOVE_TOAST", toastId });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) addToRemoveQueue(toastId);
      else state.toasts.forEach((t) => addToRemoveQueue(t.id));

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          toastId === undefined || t.id === toastId ? { ...t, open: false } : t
        ),
      };
    }

    case "REMOVE_TOAST":
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };

    default:
      return state;
  }
};

const listeners = [];
let memoryState = { toasts: [] };

function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => listener(memoryState));
}

export function toast(props) {
  const id = genId();
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  const update = (newProps) =>
    dispatch({ type: "UPDATE_TOAST", toast: { ...newProps, id } });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => !open && dismiss(),
    },
  });

  return { id, dismiss, update };
}

export function useToast() {
  const [state, setState] = React.useState(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

// ---------- 🎨 UI Component ----------
export function ToastContainer({ toasts }) {
  return (
    <div className="fixed top-5 right-5 flex flex-col gap-3 z-[9999]">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={cn(
            "rounded-2xl px-5 py-4 shadow-lg backdrop-blur-md transition-all duration-500",
            "border border-white/20 text-white animate-slide-in",
            t.type === "success" &&
              "bg-gradient-to-r from-green-400/90 to-emerald-600/90 shadow-green-500/30",
            t.type === "error" &&
              "bg-gradient-to-r from-red-400/90 to-rose-600/90 shadow-red-500/30",
            t.type === "info" &&
              "bg-gradient-to-r from-blue-400/90 to-indigo-600/90 shadow-indigo-500/30"
          )}
        >
          <h3 className="font-semibold text-lg">{t.title}</h3>
          {t.description && (
            <p className="text-sm text-white/80 mt-1">{t.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
