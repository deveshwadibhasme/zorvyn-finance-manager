import { callGemini } from "../service/getAIResponse.js";
import useTransaction from "./useTransaction";
import useFinancialStats from "./useFinancialStats";
import { message } from "antd";
import { useState } from "react";

const useInsight = () => {
  const { transaction } = useTransaction();
  const { balance, income, expenses } = useFinancialStats();
  const data = {
    financial: `balance ${balance}, income:${income} , expenses ${expenses}`,
    transaction: JSON.stringify(transaction?.slice(0, 5)),
  };

  const [resp, setRes] = useState();

  async function callAi() {
    const hide = message.loading("Loading Ai Response....", 0);
    try {
      const res = await callGemini(data);
      setRes(res);
    } catch (error) {
      message.error(error.message || "Failed to fetch AI response");
    } finally {
      hide();
    }
  }
  return { resp, callAi };
};

export default useInsight;
