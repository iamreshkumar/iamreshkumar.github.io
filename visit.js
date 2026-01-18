export default async function handler(req, res) {
  const API_KEY = "ut_ESDgfBaupYccmoV4qSuLnvmqs6gXctIWyViUDMUc";
  const BASE_URL = "https://api.counterapi.dev/v2/amresh-kumars-team-2538/first-counter-2538";

  try {
    const counted = req.query.counted === "true"; // query param
    const url = counted ? BASE_URL : `${BASE_URL}/up`;

    const response = await fetch(url, {
      headers: {
        "Authorization": `Bearer ${API_KEY}`
      }
    });

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*"); // allow frontend to fetch
    res.status(200).json({ value: data.value });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Counter API error" });
  }
}
