import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Text from "./Text/Text"
import { CalendarIcon } from "@heroicons/react/outline"

const MeetingItem = ({
  publish_date,
  company_name,
  rtype,
  title,
  recommendation,
  target_price,
  author,
}) => {
  return (
    <ST_Wrapper>
      <span>{publish_date}</span>
      <span>{company_name}</span>
      <span>{rtype}</span>
      <span style={{ flexGrow: 1 }}>{title}</span>
      <span>{recommendation}</span>
      <span>{target_price}</span>
      <span>{author}</span>
    </ST_Wrapper>
  )
}

export default MeetingItem

/* author: "Harry Potter"
company_id: 102
company_name: "KEYENCE Corp."
etype: 1
id: "98"
publish_date: "August 22 2021"
recommendation: "Update"
rtype: 2
summary: "Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. "
target_price: 196
ticker: "6861 JP"
title: " */

const ST_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

const formatDate = dateString => {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
}
