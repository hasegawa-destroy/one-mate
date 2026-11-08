
"use client";

import { useState } from "react";

export type Memo = {
    id: number;
    title: string;
    context?: string;
    children: Memo[];
};

export function MemoItem({ memo }: { memo: Memo }) {
    const [isOpenContext, setIsOpenContext] = useState(false);
    const [isOpenChildren, setIsOpenChildren] = useState(false);

    const hasContext = !!memo.context?.trim();
    const hasChildren = memo.children.length > 0;

    const handleClick = () => {
        if (hasContext) {
            setIsOpenContext(!isOpenContext);
        } else if (hasChildren) {
            setIsOpenChildren(!isOpenChildren);
        }
    };

    return (
        <div className="mt-2 border rounded-xl p-2">
            <div
                className="flex flex-col cursor-pointer"
                onClick={handleClick}
            >
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">
                        {memo.title}
                    </p>

                    {(hasContext || hasChildren) && (
                        <div className="px-2">
                            {hasContext
                                ? (isOpenContext ? "▲" : "▼")
                                : (isOpenChildren ? "▲" : "▼")}
                        </div>
                    )}
                </div>

                {isOpenContext && hasContext && (
                    <p className="mt-2 whitespace-pre-wrap">
                        {memo.context}
                    </p>
                )}
            </div>

            <div
                className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpenChildren ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                {memo.children.map((child) => (
                    <MemoItem
                        key={child.id}
                        memo={child}
                    />
                ))}
            </div>
        </div>
    );
}
