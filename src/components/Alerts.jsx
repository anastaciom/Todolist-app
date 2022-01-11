import React from 'react'
import {CheckCircle, Cancel } from "@mui/icons-material/";

export default function Alerts({showAddAlert, showRemoveAlert}) {
    return (
        <>
             {showAddAlert || showRemoveAlert ? (
        <div
          className="alert"
          id={
            showAddAlert ? "alert-add" : showRemoveAlert ? "alert-delete" : ""
          }
        >
          {showRemoveAlert ? (
            <span>
              <Cancel style={{ color: "#ff5b5b" }} /> Task removed
            </span>
          ) : (
            <span>
              <CheckCircle style={{ color: "#4fff78" }} /> New task added
            </span>
          )}
        </div>
      ) : null}
        </>
    )
}
