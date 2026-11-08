"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InputMemo() {
    const [inputText, setInputText] = useState("");

    const segmenter = new Intl.Segmenter("ja-JP", { granularity: "grapheme" });
    const inputCount = [...segmenter.segment(inputText)].length;

    const router = useRouter();
    const handleRegisterButtonClick = () => {
        router.push("/memo-list");
    };

    const handleBackButtonClick = () => {
        router.push("/memo-list");
    };

    return (
        <div className="flex flex-col items-center p-4">
            <div className="w-full">
                <p>タイトル</p>
                <input
                    className="w-full px-2 rounded-lg border"
                    placeholder="タイトルを入力"
                />
            </div>

            <div className="w-full h-auto mt-2">
                <p>本文</p>
                <textarea
                    className="w-full min-h-[60px] px-2 rounded-lg border"
                    onChange={(e) => { setInputText(e.target.value) }}
                />
                <p className="text-right">{inputCount}文字</p>
            </div>

            {/* タグ */}
            <div className="w-full">
                <p>タグ</p>
                <input
                    className="w-full px-2 border rounded-lg"
                    placeholder="タグを入力"
                />

                <div className="flex flex-col">
                    <div className="flex gap-2">

                    </div>
                </div>
            </div>

            <div className="flex flex-col item-center gap-2 mt-4">
                <button
                    className="px-16 py-2 border rounded-full"
                    onClick={() => handleRegisterButtonClick()}
                >
                    登録
                </button>
                <button
                    className="px-16 py-2 border rounded-full"
                    onClick={() => handleBackButtonClick()}
                >
                    キャンセル
                </button>
            </div>
        </div>
    );
}
