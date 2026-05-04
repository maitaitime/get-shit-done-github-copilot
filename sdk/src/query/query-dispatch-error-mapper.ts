import type { QueryDispatchError, QueryDispatchResult } from './query-dispatch-contract.js';
import { errorMessage, isTimeoutMessage, parseTimeoutMs } from '../query-failure-classification.js';
import { fallbackFailureError, nativeFailureError, nativeTimeoutError } from './query-error-taxonomy.js';
import { dispatchFailure } from './query-dispatch-result-builder.js';

export function toDispatchFailure(
  error: QueryDispatchError,
  stderr: string[] = [],
): QueryDispatchResult {
  return dispatchFailure(error, stderr);
}

export function mapNativeDispatchError(error: unknown, command: string, args: string[]): QueryDispatchError {
  const message = errorMessage(error);
  if (isTimeoutMessage(message)) {
    return nativeTimeoutError({ message, command, args, timeoutMs: parseTimeoutMs(message) });
  }
  return nativeFailureError({ message, command, args });
}

export function mapFallbackDispatchError(error: unknown, command: string, args: string[]): QueryDispatchError {
  const message = errorMessage(error);
  return fallbackFailureError({ message, command, args, backend: 'cjs' });
}
