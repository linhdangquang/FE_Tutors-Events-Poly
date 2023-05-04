import { isRejected, isRejectedWithValue } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

function isPayloadErrorMessage(payload) {
  return payload && payload.message && payload.message.error
}

export const rtkQueryErrorLogger = (store) => (next) => (action) => {
  if (isRejected(action)) {
    if (action.error && isPayloadErrorMessage(action.payload)) {
      console.error(action.payload.message.error)
    }
  }

  if (isRejectedWithValue(action)) {
    toast.error(action.payload.message.error)
  }
}