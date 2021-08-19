import { atom } from "recoil"

export const researchListState = atom({
  key: "researchListState",
  default: [],
})

export const companyListState = atom({
  key: "companyListState",
  default: [],
})

export const researchListFilterState = atom({
  key: "researchListFilterState",
  default: {
    author: null,
    rtype: null,
    etype: null,
    /*     ticker: null, */
    company_name: null,
    recommendation: null,
    sector: null,
    region: null,
  },
})
