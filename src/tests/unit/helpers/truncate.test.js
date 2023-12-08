import { truncate } from '@/helpers/truncate';

describe('truncate function', () => {
  it('truncates string longer than maxLength and appends "..."', () => {
    const longString = 'This is a very long string that needs to be truncated';
    const truncatedString = truncate(longString, 10);
    expect(truncatedString.length).toBe(13);
    expect(truncatedString).toMatch(/...$/);
  });

  it('returns original string if length is less than maxLength', () => {
    const shortString = 'Short';
    const truncatedString = truncate(shortString, 10);
    expect(truncatedString).toBe(shortString);
  });

  it('returns original string if maxLength is not provided', () => {
    const longString = 'This is a very long string that needs to be truncated';
    const truncatedString = truncate(longString);
    expect(truncatedString.length).toBe(19);
  });
});
