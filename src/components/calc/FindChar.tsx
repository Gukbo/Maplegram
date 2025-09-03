import { useEffect, useState } from "react";
import { getOcid, getCharacterInfo } from "../../api/Character";

export default function FindChar({ nickname = "" }: { nickname?: string }) {
  const [info, setInfo] = useState<any>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [name, setName] = useState<string>(nickname);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!name) return;

    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setErr(null);
        const ocid = await getOcid(name);
        const basic = await getCharacterInfo(ocid);
        if (!cancelled) setInfo(basic);
      } catch (e: any) {
        if (!cancelled) {
          setErr("조회 중 오류가 발생했습니다.");
          setInfo(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [name]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" ? setName(inputValue.trim()) : null
          }
          placeholder="닉네임을 입력하세요"
          className="border px-3 py-2 rounded"
        />
        <button
          onClick={() => setName(inputValue.trim())}
          className="px-3 py-2 rounded bg-main-orange text-white"
        >
          🔍
        </button>
      </div>

      {loading && <div>로딩중…</div>}
      {err && <div className="text-red-600">{err}</div>}

      {info && (
        <>
          <div>{name} 님의 캐릭터입니다.</div>
          <img
            src={info.character_image}
            alt={info.character_name}
            className="w-64 h-64"
          />
        </>
      )}
    </div>
  );
}
