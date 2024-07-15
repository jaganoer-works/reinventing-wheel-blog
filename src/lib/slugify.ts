export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // スペースをハイフンに置換
    .replace(/[^\w\-]+/g, "") // 英数字とハイフン以外を削除
    .replace(/\-\-+/g, "-"); // 連続したハイフンを単一のハイフンに置換
}
