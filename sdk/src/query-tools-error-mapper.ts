import { GSDError, exitCodeFor } from './errors.js';
import { GSDToolsError } from './gsd-tools-error.js';
import { errorMessage, toFailureSignal } from './query-failure-classification.js';

/**
 * Module owning projection of internal errors to GSDToolsError contract.
 */
export function toGSDToolsError(command: string, args: string[], err: unknown): GSDToolsError {
  if (err instanceof GSDError) {
    return GSDToolsError.failure(
      err.message,
      command,
      args,
      exitCodeFor(err.classification),
      '',
      { cause: err },
    );
  }

  const msg = errorMessage(err);
  const signal = toFailureSignal(err);
  if (signal.kind === 'timeout') {
    return GSDToolsError.timeout(msg, command, args, '', signal.timeoutMs, err instanceof Error ? { cause: err } : undefined);
  }

  return GSDToolsError.failure(msg, command, args, 1, '', err instanceof Error ? { cause: err } : undefined);
}
