"use client";
import { useSyncExternalStore } from "react";

export default function useMounted() {
    return useSyncExternalStore(
        () => () => {},
        () => true,
        () => false,
    );
}
