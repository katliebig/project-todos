import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

const allTasks = [
  { id: 1, title: "Finish project", isCompleted: false, isHidden: false, dueDate: new Date("April 25, 2021").toJSON() },
  { id: 2, title: "Call mum", isCompleted: false, isHidden: false, dueDate: new Date("April 19, 2021").toJSON() },
  { id: 3, title: "Get a haircut", isCompleted: true, isHidden: false, dueDate: new Date("May 2, 2021").toJSON() },
]

const tasks = createSlice({
  name: "tasks",
  initialState: {
    allTasks,
    isFiltered: false
  },
  reducers: {
    addTask: (state, action) => {
      state.allTasks = [...state.allTasks, action.payload]
    },

    removeTask: (state, action) => {
      if (action.payload) {
        const updatedItems = state.allTasks.filter(task => task.id !== action.payload.id)
        state.allTasks = updatedItems
      } else {
        state.allTasks = []
      }
    },

    toggleTask: (state, action) => {
      const updatedItems = state.allTasks.map(task => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            isCompleted: !task.isCompleted
          }
        } else {
          return task
        }
      })
      state.allTasks = updatedItems
    },

    completeAllTasks: (state, action) => {
      const updatedItems = state.allTasks.map(task => {
        return {
          ...task,
          isCompleted: true
        }
      })
      state.allTasks = updatedItems
    },

    filterCompleted: (state, action) => {
      const updatedItems = state.allTasks.map(task => {
        if (!task.isCompleted) {
          return {
            ...task,
            isHidden: true
          }
        } else {
          return {
            ...task,
            isHidden: false
          }
        }
      })

      state.allTasks = updatedItems
      state.isFiltered = true
    },

    filterUncompleted: (state) => {
      const updatedItems = state.allTasks.map(task => {
        if (task.isCompleted) {
          return {
            ...task,
            isHidden: true
          }
        } else {
          return {
            ...task,
            isHidden: false
          }
        }
      })

      state.allTasks = updatedItems
      state.isFiltered = true
    },

    filterDueSoon: (state) => {
      const updatedItems = state.allTasks.map(task => {
        if (!task.dueDate || task.isCompleted || dayjs(task.dueDate).isSameOrBefore(new Date())) {
          return {
            ...task,
            isHidden: true
          }
        } else {
          return {
            ...task,
            isHidden: false
          }
        }
      })

      state.allTasks = updatedItems
      state.isFiltered = true
    },

    filterOverdue: (state) => {
      const updatedItems = state.allTasks.map(task => {
        if (!task.dueDate || task.isCompleted || !dayjs(task.dueDate).isSameOrBefore(new Date())) {
          return {
            ...task,
            isHidden: true
          }
        } else {
          return {
            ...task,
            isHidden: false
          }
        }
      })

      state.allTasks = updatedItems
      state.isFiltered = true
    },

    resetFilter: (state) => {
      const updatedItems = state.allTasks.map(task => {
        return {
          ...task,
          isHidden: false
        }
      })

      state.allTasks = updatedItems
      state.isFiltered = false
    }
  }
})

export default tasks