import { selector } from "recoil"
import {
  researchListState,
  researchListFilterState,
  companyListState,
} from "./atoms"

export const filteredResearchListState = selector({
  key: "filteredResearchListState",
  get: ({ get }) => {
    const filterObj = get(researchListFilterState)
    const researchList = get(researchListState)
    const companyList = get(companyListState)

    const filteredList = researchList.filter(r => {
      let currentR = r.node
      let toInclude = true
      Object.entries(filterObj).forEach(([key, value]) => {
        const fullCompany = companyList.find(jsonC => {
          return jsonC.node.ticker === currentR.ticker
        })

        if (key === "sector") {
          if (value && value != fullCompany?.node.sector) {
            toInclude = false
          }
        } else if (key === "region") {
          if (value && value != fullCompany?.node.region) {
            toInclude = false
          }
        } else if (value && value != currentR[key]) {
          toInclude = false
        } /* else if (!value) {
          nullCounter++
        } */
      })
      return toInclude
    })

    return filteredList

    /*     switch (filter) {
      case 'Show Completed':
        return researchList.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return researchList.filter((item) => !item.isComplete);
      default:
        return researchList;
    } */
  },
})

export const availableAuthors = selector({
  key: "availableAuthors",
  get: ({ get }) => {
    const list = get(filteredResearchListState)
    const authors = [...new Set(list.map(r => r.node.author))]

    return authors
  },
})

export const availableCompanies = selector({
  key: "availableCompanies",
  get: ({ get }) => {
    const list = get(filteredResearchListState)
    const companes = [...new Set(list.map(r => r.node.company_name))]

    return companes
  },
})

export const availableRecs = selector({
  key: "availableRecs",
  get: ({ get }) => {
    const list = get(filteredResearchListState)
    const recs = [...new Set(list.map(r => r.node.recommendation))]

    return recs
  },
})

export const availableResearchType = selector({
  key: "availableResearchType",
  get: ({ get }) => {
    const list = get(filteredResearchListState)
    const restypes = [...new Set(list.map(r => r.node.rtype))]

    return restypes
  },
})

export const availableEntityType = selector({
  key: "availableEntityType",
  get: ({ get }) => {
    const list = get(filteredResearchListState)
    const resetypes = [...new Set(list.map(r => r.node.etype))]

    return resetypes
  },
})

export const availableSectors = selector({
  key: "availableSectors",
  get: ({ get }) => {
    const resList = get(filteredResearchListState)
    const companyList = get(companyListState)
    const superResList = resList.map(r => {
      let curR = r.node
      const companyJson = companyList.find(jsonC => {
        return jsonC.node.ticker === curR.ticker
      })
      return {
        ...curR,
        sector: companyJson?.node.sector,
        region: companyJson?.node.region,
      }
    })
    const sectors = [...new Set(superResList.map(r => r.sector))]
    return sectors.filter(e => e)
  },
})

export const availableRegions = selector({
  key: "availableRegions",
  get: ({ get }) => {
    const resList = get(filteredResearchListState)
    const companyList = get(companyListState)
    const superResList = resList.map(r => {
      let curR = r.node
      const companyJson = companyList.find(jsonC => {
        return jsonC.node.ticker === curR.ticker
      })
      return {
        ...curR,
        sector: companyJson?.node.sector,
        region: companyJson?.node.region,
      }
    })
    const regions = [...new Set(superResList.map(r => r.region))]
    return regions.filter(e => e)
  },
})
