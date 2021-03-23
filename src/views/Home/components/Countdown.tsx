import React, { useCallback, useRef } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon } from '@coffeeswap/uikit'
import useI18n from 'hooks/useI18n'
import Countdown from 'react-countdown';
import { NavLink } from 'react-router-dom';

const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
`
const CountdownCom = () => {
  const TranslateString = useI18n()
  const endDate = new Date("2021-03-21 03:00:00");

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading color="contrast" size="lg">
          Until Start Staking and Farming
        </Heading>
        <CardMidContent color="#FFA500">
          <Countdown date={endDate}/>
        </CardMidContent>        
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default CountdownCom
