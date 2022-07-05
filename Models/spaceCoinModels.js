import spaceCoinData from "../libs/SpaceCoinDummyData.js";
import faqData from "../libs/faqData.js";

export function getSpaceCoin() {
  const responseObject = spaceCoinData;
  return responseObject;
}

export function getFaqData() {
  const responseObject = faqData;
  return responseObject;
}
