// no show
const categoriesBlackList = ["_id", "charaName", "pageUrl", "pageImageProfileUrl", "pageImageFullUrl", "audioUrl", "files"];

// no url
export const categoriesNoUrl = ["lastName", "birthday", "hobbies", "voice"];

export function getKeysWithoutUndefined(data) {
  const keys = Object.keys(data);
  return keys.filter(p => data[p] && !categoriesBlackList.includes(p));
}