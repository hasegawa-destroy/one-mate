"use client";

import { useRouter } from "next/navigation";
import { MemoItem } from "./components/memoItem";
import { dummyMemoDatas } from "@/data/dummyData";

export default function MemoList() {
    const router = useRouter();

    const handleCreateMemoClick = () => {
        router.push("/input-memo");
    };

    const memoList = dummyMemoDatas;

    return (
        <div className="flex flex-col items-center p-4">
            <p>メモ一覧</p>

            <div className="w-full">
                <div className="w-full h-auto rounded-xl border p-2">
                    <div className="w-full">
                        {memoList.map((memo) => (
                            <MemoItem
                                key={memo.id}
                                memo={memo}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="">
                <button
                    className="px-16 py-2 border rounded-full"
                    onClick={() => handleCreateMemoClick()}
                >
                    メモ作成
                </button>
            </div>
        </div>
    );
}