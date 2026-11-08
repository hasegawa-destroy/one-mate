import { Memo } from "@/app/memo-list/components/memoItem";

export const dummyMemoDatas: Memo[] = [
    {
        id: 1,
        title: "AWS",
        children: [
            {
                id: 2,
                title: "DynamoDB",
                children: [
                    {
                        id: 3,
                        title: "DynamoDBとは",
                        context: "AWSが提供するDBのサービスであり...",
                        children: []
                    },
                    {
                        id: 4,
                        title: "テーブル設計",
                        context: "DynamoDBにはPK・SK...",
                        children: []
                    }
                ]
            },
            {
                id: 5,
                title: "Lambda",
                children: [
                    {
                        id: 6,
                        title: "Lambdaとは",
                        context: "サーバーレスでコードを実行する",
                        children: []
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "セキュリティ",
        children: [
            {
                id: 8,
                title: "Dos",
                context: "Dos攻撃とは...",
                children: []
            },
            {
                id: 9,
                title: "XSS",
                context: "XSSとは...",
                children: []
            },
        ]
    }
];