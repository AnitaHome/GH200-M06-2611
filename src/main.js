import * as core from "@actions/core";
import getJoke from "./joke.js";

async function run() {
  try {
    core.info("正在連線至外部 API 取得笑話內容...");
    const joke = await getJoke();

    // 在執行紀錄中印出笑話內容
    core.info(`取得成功: ${joke}`);

    // 設定 Action 輸出變數，供後續步驟（Downstream Steps）使用
    core.setOutput("joke", joke);
  } catch (error) {
    // 發生例外時，通知 Runner 此步驟失敗並顯示錯誤訊息
    core.setFailed(`執行自訂 Action 失敗: ${error.message}`);
  }
}

run();