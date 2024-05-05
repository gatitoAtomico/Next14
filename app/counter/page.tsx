"use client";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../_lib/features/themeSlice";
import type { RootState } from "../_lib/providers/store";
import Link from "next/link";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Link href={"/about"}>About</Link>
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
    </div>
  );
}
