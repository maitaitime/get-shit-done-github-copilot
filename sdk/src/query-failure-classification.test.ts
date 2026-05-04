import { describe, expect, it } from 'vitest';
import {
  errorMessage,
  isTimeoutLikeError,
  isTimeoutMessage,
  parseTimeoutMs,
  timeoutMessage,
} from './query-failure-classification.js';

describe('query failure classification', () => {
  it('extracts timeout metadata from message', () => {
    const msg = timeoutMessage('state', ['load'], 30000);
    expect(isTimeoutMessage(msg)).toBe(true);
    expect(parseTimeoutMs(msg)).toBe(30000);
  });

  it('classifies timeout-like errors', () => {
    expect(isTimeoutLikeError(new Error('gsd-tools timed out after 1000ms: x'))).toBe(true);
    const abort = new Error('aborted');
    abort.name = 'AbortError';
    expect(isTimeoutLikeError(abort)).toBe(true);
  });

  it('normalizes unknown error values', () => {
    expect(errorMessage('boom')).toBe('boom');
    expect(errorMessage(new Error('x'))).toBe('x');
  });
});
