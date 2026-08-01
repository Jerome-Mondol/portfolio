/**
 * cn — join class names, dropping falsy values.
 * @param  {Array<string | false | null | undefined>} parts
 * @returns {string}
 */
export function cn(...parts) {
  return parts.filter(Boolean).join(" ");
}
