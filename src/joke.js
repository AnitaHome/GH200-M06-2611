/**
 * 透過維基百科官方 API 取得隨機台灣繁體中文百科條目摘要
 */
async function getJoke() {
  const response = await fetch("https://zh.wikipedia.org/api/rest_v1/page/random/summary", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Accept-Language": "zh-tw",
      "User-Agent": "GitHubAction-GH200Lab/1.0",
    },
  });

  if (!response.ok) {
    throw new Error(`無法取得內容，HTTP 狀態碼: ${response.status}`);
  }

  const result = await response.json();
  // 回傳格式範例：「三道嶺煤礦：是一座位於...」
  return `【${result.title}】${result.extract}`;
}

export default getJoke;