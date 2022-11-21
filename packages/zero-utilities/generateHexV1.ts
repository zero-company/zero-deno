/**
 * Generates random hexadecimal string/s
 * @param opts.hexLength - limits length of hex (default: 4)
 * @param opts.hexNum - specifies number of hexes (default: 1)
 * @param opts.prefix - adds prefix string
 * @param opts.suffix - adds suffix string
 * @param opts.divider - adds dividers (default: '-')
 * @returns res.hexes - returns generated hex array
 * @returns res.joined - returns joined string
 * @example generateHexV1({ prefix: 'uid', hexNum: 4 })
 * ```
 * {
 *  hexes: [ "d596", "9fa3", "a415", "50ea" ],
 *  joined: "uid-d596-9fa3-a415-50ea"
 * }
 * ```
 */
export const generateHexV1 = ({
  prefix = "",
  suffix = "",
  divider = "-",
  hexLength = 4,
  hexNum = 1,
} = {}) => {
  const hexes = [...Array(hexNum)].map(() =>
    [...Array(hexLength)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("")
  );
  const joined = [prefix, ...hexes, suffix]
    .filter((e) => Boolean(e)) // Filters out falsy values [false, null, undefined, 0, ""]
    .join(divider);
  return { hexes, joined };
};
