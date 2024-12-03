import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch; // 型が「無名関数()のAppDispatch」
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
