import * as React from "react"
import styled from "styled-components"
import { useRecoilState, useRecoilValue } from "recoil"
import { researchListFilterState } from "../recoil/atoms"
import { availableCompanies } from "../recoil/selectors"
import SuggestItem from "./SuggestItem"

const ST_SlicerAuthor = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`

const SlicerOptionItem = styled.button`
  color: "black"; // color of slicers
  background-color: ${props => (props.isFilteredOut ? "grey" : "default")};
  cursor: ${props => (props.isFilteredOut ? "not-allowed" : "pointer")};
`

const SlicerCompany = () => {
  const [researchListFilter, setResearchListFilter] = useRecoilState(
    researchListFilterState
  )
  const avCompanies = useRecoilValue(availableCompanies)

  return (
    <ST_SlicerAuthor>
      <h1>Company</h1>
      <SuggestItem
        suggestData={avCompanies}
        placeholder="Company"
        id="suggestCompany"
        setResearchListFilter={setResearchListFilter}
      />
      {allCompanies
        .filter(all => all === researchListFilter["company_name"])
        .map(a => (
          <SlicerOptionItem
            isActive={researchListFilter["company_name"] === a}
            isFilteredOut={!avCompanies.includes(a)}
            disabled={!avCompanies.includes(a)}
            key={a}
            onClick={ev => {
              setResearchListFilter(filtObj => {
                if (filtObj.company_name === a) {
                  return { ...filtObj, company_name: null }
                } else {
                  return { ...filtObj, company_name: a }
                }
              })
            }}
          >
            {a}
          </SlicerOptionItem>
        ))}
    </ST_SlicerAuthor>
  )
}

export default SlicerCompany

const allCompanies = [
  "Pfizer Inc.",
  "Oracle Corp.",
  "Wal-Mart Stores, Inc.",
  "Union Pacific Corp.",
  "Kering SA",
  "JPMorgan Chase & Co.",
  "Berkshire Hathaway, Inc.",
  "Novartis AG",
  "Verizon Communications, Inc.",
  "Samsung Electronics Co., Ltd.",
  "The Charles Schwab Corp.",
  "China Merchants Bank Co., Ltd.",
  "Bank of America Corp.",
  "Bank of China Ltd.",
  "Citigroup, Inc.",
  "ASML Holding NV",
  "Intuitive Surgical, Inc.",
  "SAP SE",
  "Roche Holding AG",
  "Rio Tinto Plc",
  "NTT DoCoMo, Inc.",
  "Starbucks Corp.",
  "CVS Caremark Corp",
  "Abbott Laboratories",
  "Reliance Industries Ltd.",
  "Nestle SA",
  "Microsoft Corp.",
  "China Construction Bank Corp.",
  "AbbVie, Inc.",
  "BYD Co. Ltd.",
  "Costco Wholesale Corp.",
  "Diageo Plc",
  "QUALCOMM, Inc.",
  "Eli Lilly & Co.",
  "Applied Materials, Inc.",
  "Medtronic Plc",
  "GlaxoSmithKline Plc",
  "Johnson & Johnson",
  "Wells Fargo & Co.",
  "Vale S.A.",
  "Royal Dutch Shell Plc",
  "Morgan Stanley",
  "3M Co.",
  "Target Corp.",
  "Estee Lauder Cos., Inc.",
  "HDFC Bank Ltd.",
  "Intuit, Inc.",
  "Advanced Micro Devices, Inc.",
  "Deere & Co.",
  "Christian Dior SE",
  "NIKE, Inc.",
  "UnitedHealth Group, Inc.",
  "The Home Depot, Inc.",
  "Chevron Corp.",
  "NVIDIA Corp.",
  "China Life Insurance Co. Ltd.",
  "Commonwealth Bank of Australia",
  "Exxon Mobil Corp.",
  "International Business Machines Corp.",
  "Volkswagen AG",
  "Cisco Systems, Inc.",
  "Sony Corp.",
  "Philip Morris International, Inc.",
  "United Parcel Service, Inc.",
  "Amazon.com, Inc.",
  "SoftBank Group Corp.",
  "Merck & Co., Inc.",
  "salesforce.com, inc.",
  "Adobe Systems, Inc.",
  "KEYENCE Corp.",
  "Tata Consultancy Services Ltd.",
  "Siemens AG",
  "American Express Co.",
  "AstraZeneca Plc",
  "Honeywell International, Inc.",
  "General Electric Co.",
  "Anheuser-Busch InBev SA/NV",
  "Charter Communications, Inc.",
  "Comcast Corp.",
  "Lowe's Cos., Inc.",
  "Unilever PLC",
  "BHP Billiton Ltd.",
  "Novo Nordisk A/S",
  "The Coca-Cola Co.",
  "Procter & Gamble Co.",
  "The Toronto-Dominion Bank",
  "Rio Tinto Ltd.",
  "AIA Group Ltd.",
  "BlackRock, Inc.",
  "NextEra Energy, Inc.",
  "Total SA",
  "Toyota Motor Corp.",
  "Taiwan Semiconductor Manufacturing Co., Ltd.",
  "Tencent Holdings Ltd.",
  "Nippon Telegraph & Telephone Corp.",
  "Visa, Inc.",
  "PetroChina Co., Ltd.",
  "Industria de Diseno Textil SA",
  "Thermo Fisher Scientific, Inc.",
]
