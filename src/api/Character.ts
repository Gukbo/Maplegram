import axios from "axios";

const Api_base = "https://open.api.nexon.com";

const api = axios.create({
  baseURL: Api_base,
  headers: {
    "x-nxopen-api-key": import.meta.env.VITE_NEXON_API_KEY,
  },
});

export async function getOcid(characterName: string) {
  const res = await api.get(`/maplestory/v1/id`, {
    params: { character_name: characterName },
  });
  return res.data.ocid as string;
}

export async function getCharacterInfo(ocid: string) {
  const res = await api.get(`/maplestory/v1/character/basic`, {
    params: { ocid },
  });
  return res.data;
}
