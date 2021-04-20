import React from "react"
import { useSelector } from "react-redux"
import styled from 'styled-components'

const StyledParagraph = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
  margin: 0;
`

export const Counter = () => {
  const tasks = useSelector(store => store.tasks.allTasks)

  const totalTasks = tasks.length
  const totalCompletedTasks = tasks.filter(task => task.isCompleted).length

  return (
    <StyledParagraph>{totalCompletedTasks}/{totalTasks} completed</StyledParagraph>
  )
}