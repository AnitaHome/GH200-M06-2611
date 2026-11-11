/**
 * 透過 api.shadiao.pro/du 取得隨機趣味金句
 * 採用現代 Node.js 原生 fetch API，無需依賴已廢棄的 request 套件
 */
async function getJoke() {
  const response = await fetch("https://api.shadiao.pro/du", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`無法取得內容，HTTP 狀態碼: ${response.status}`);
  }

  const result = await response.json();
  return result.data.text;
}

export default getJoke;