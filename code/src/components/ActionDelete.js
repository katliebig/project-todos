import React from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components'

import tasks from "reducers/tasks"

const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 12px;
  font-weight: 400;
  margin: 5px 0;
  border: 1px solid #8d8f96;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

const StyledParagraph = styled.p`
  padding: 0;
  margin: 0;
`

const Icon = styled.img`
  width: 12px;
`

const ActionDelete = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    const deleteAll = window.confirm("Are you sure you want to delete all tasks?")
    if (deleteAll) {
      dispatch(tasks.actions.removeTask())
    }
  }

  return (
    <HeaderButton onClick={handleClick} >
      <StyledParagraph>Delete all</StyledParagraph>
      <Icon src="./assets/bin-icon.svg" alt="bin icon" />
    </HeaderButton>
  )
}

export default ActionDelete
