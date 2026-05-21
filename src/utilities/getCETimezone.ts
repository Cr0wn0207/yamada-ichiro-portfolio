export function getCETimezone(): string {
  const now = new Date();
  const ceOffset = Math.round(
    (new Date(now.toLocaleString("en-US", { timeZone: "Europe/Copenhagen" })).getTime() -
      new Date(now.toLocaleString("en-US", { timeZone: "UTC" })).getTime()) /
      3_600_000,
  );
  return ceOffset === 2 ? "CEST — UTC+2" : "CET — UTC+1";
}
