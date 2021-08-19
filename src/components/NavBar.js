import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import {
  UserGroupIcon,
  PresentationChartLineIcon,
  HomeIcon,
  OfficeBuildingIcon,
  CogIcon,
  FlagIcon,
  CalendarIcon,
  PencilAltIcon,
  PresentationChartBarIcon,
  ClockIcon,
  BadgeCheckIcon,
  SearchIcon,
  UserIcon,
  EyeIcon,
} from "@heroicons/react/outline"
import Svgllama from "../assets/Svgllama"
import Text from "./Text/Text"

const ST_Wrapper_FlexCol = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`
const ST_FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`
const ST_User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2rem;
`
const ST_NavItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem;
`
const ST_NavItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 3rem;
`

const NavBar = () => {
  return (
    <ST_Wrapper_FlexCol>
      <ST_FlexColumn>
        <Svgllama width="36px" height="36px" />
        <h1>SuperSecretLamA</h1>
      </ST_FlexColumn>
      <ST_User>
        <UserIcon width={"32px"} />
        <Text
          content="Michele Paladino"
          padding="0"
          margin="0"
          lineHeight="100%"
          letterSpacing=""
          fontSize="1em"
          fontWeight="500"
        />
      </ST_User>
      <ST_NavItems>
        <ST_NavItem>
          <HomeIcon width={"24px"} />
          &nbsp;<span>Home</span>
        </ST_NavItem>
        <ST_NavItem>
          <OfficeBuildingIcon width={"24px"} />
          &nbsp;<span>Company</span>
        </ST_NavItem>
        <ST_NavItem>
          <CogIcon width={"24px"} />
          &nbsp;<span>Sector</span>
        </ST_NavItem>
        <ST_NavItem>
          <FlagIcon width={"24px"} />
          &nbsp;<span>Country</span>
        </ST_NavItem>
        <ST_NavItem>
          <CalendarIcon width={"24px"} />
          &nbsp;<span>Calendar</span>
        </ST_NavItem>
        <ST_NavItem>
          <PresentationChartLineIcon width={"24px"} />
          &nbsp;<span>LAM Eq Trade</span>
        </ST_NavItem>
        <ST_NavItem>
          <UserGroupIcon width={"24px"} />
          &nbsp;<span>Dragonfly</span>
        </ST_NavItem>
        <ST_NavItem>
          <PresentationChartBarIcon width={"24px"} />
          &nbsp;<span>Analytics</span>
        </ST_NavItem>
        <ST_NavItem>
          <ClockIcon width={"24px"} />
          &nbsp;<span>Events</span>
        </ST_NavItem>
        <ST_NavItem>
          <SearchIcon width={"24px"} />
          &nbsp;<span>Advanced Search</span>
        </ST_NavItem>
        <ST_NavItem>
          <BadgeCheckIcon width={"24px"} />
          &nbsp;<span>Compliance</span>
        </ST_NavItem>
        <ST_NavItem>
          <PencilAltIcon width={"24px"} />
          &nbsp;<span>Publisher</span>
        </ST_NavItem>
        <ST_NavItem>
          <EyeIcon width={"24px"} />
          &nbsp;<span>Settings</span>
        </ST_NavItem>
      </ST_NavItems>
    </ST_Wrapper_FlexCol>
  )
}

export default NavBar
