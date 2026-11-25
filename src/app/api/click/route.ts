import { NextResponse } from "next/server";
import { links } from "@/lib/links";
import { getClient } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

// POST /api/click  { id: string }  → 해당 링크의 클릭 수 +1
export async function POST(request: Request) {
  let id: unknown;
  try {
    ({ id } = await request.json());
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  // 등록된 링크 id만 허용 (임의 문서 생성 방지)
  if (typeof id !== "string" || !links.some((link) => link.id === id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  try {
    const client = await getClient();
    await client
      .db()
      .collection<{ _id: string; count: number }>("clicks")
      .updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("클릭 수 기록 실패:", error);
    return NextResponse.json({ error: "기록에 실패했습니다." }, { status: 500 });
  }
}
