"use client";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../_lib/features/themeSlice";
import type { RootState } from "../_lib/providers/store";
import Link from "next/link";
import { decrement, increment } from "../_lib/features/counterSlice";

export default function Counter() {
  const theme = useSelector((state: RootState) => state.theme);
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <Link href={"/about"}>About</Link>
      <span>{theme.primaryColor}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(changeTheme("gatito"))}
      >
        Change Theme
      </button>
    </div>
  );
}
