import React from "react";
import { IconLogs } from "../Icons/Index";

export default function SchedualCardLog({ itemsLogs }) {
  return (
    <div className="Project__UI__grid__schedualCardLogs">
       <h2 className="Project__UI__utility__copy__h2">logs section</h2>
      <div className="Project__UI__schedual-card--small">
       

        {itemsLogs.map((dataItemLogs) => {
          return (
            <div
              key={dataItemLogs.id}
              className="Project__UI__schedual-card--small__content"
            >
              <IconLogs className="Project__UI__utility__icon" />

              <div className="Project__UI__grid__schedual-card--small__content__header">
                <h4 className="Project__UI__utility__copy__h4">name: {dataItemLogs.serverName}</h4>
                <h5 className="Project__UI__utility__copy__h5">id: {dataItemLogs.id}</h5>
              </div>
              <div className="Project__UI__grid__schedual-card--small__content__footer">
                <span>status: {dataItemLogs.status}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
