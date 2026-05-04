export function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

export function parseTimeoutMs(message: string): number | undefined {
  const m = message.match(/timed out after\s+(\d+)ms/i);
  if (!m) return undefined;
  const n = Number.parseInt(m[1], 10);
  return Number.isFinite(n) ? n : undefined;
}

export function isTimeoutMessage(message: string): boolean {
  return /timed out after/i.test(message);
}

export function isTimeoutLikeError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  if (error.name === 'TimeoutError' || error.name === 'AbortError') return true;
  return isTimeoutMessage(error.message);
}

export function timeoutMessage(command: string, args: string[], timeoutMs: number): string {
  return `gsd-tools timed out after ${timeoutMs}ms: ${command} ${args.join(' ')}`;
}
