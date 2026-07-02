export function getJSTTimezone(): string {
  const now = new Date();
  const jstOffset = Math.round(
    (new Date(now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" })).getTime() -
      new Date(now.toLocaleString("en-US", { timeZone: "UTC" })).getTime()) /
      3_600_000,
  );
  return `JST — UTC+${jstOffset}`;
}
