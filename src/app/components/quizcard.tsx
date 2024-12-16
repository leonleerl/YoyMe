'use client'
import React, { useEffect, useState } from "react";
import { Quizcardmodel } from "../types/index";
import Link from "next/link";
import _ from "lodash";

export function Quizcard() {
  const [data, setData] = useState<Quizcardmodel[]>([]);
  const [randomTwo, setRandomTwo] = useState<Quizcardmodel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8888/quizcards");
        const fetchedData: Quizcardmodel[] = await response.json();
        setData(fetchedData); 
        setRandomTwo(_.sampleSize(fetchedData, 2));
      } catch (error) {
        console.error("Error fetching quiz cards:", error);
      }
    };

    fetchData();
  }, []);

  const handleRefresh = () => {
    if (data.length > 0) {
      setRandomTwo(_.sampleSize(data, 2));
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-1 border border-gray-400">
      <div className="flex justify-between items-center">
        <div className="text-pink-600 font-semibold text-lg">每日单词：</div>
        <Link
          href={"#"}
          onClick={(e) => {
            e.preventDefault(); 
            handleRefresh();
          }}
        >
          <svg
            className="mr-3 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </Link>
      </div>
      <ul>
        {randomTwo.map((item) => (
          <li key={item.id} className="mt-2">
            <span className="font-bold">{item.name}</span> <br />
            <span>{item.example}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
