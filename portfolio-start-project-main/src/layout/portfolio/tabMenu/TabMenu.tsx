import React from 'react'
import {S} from "../Portfolio_styles";

export type tabMenuPropsType = "all" | "ux" | "des" | "front"



function TabMenu(props:{tabItems: Array<{status:tabMenuPropsType, title: string}>, changeFilterStatus: (value: tabMenuPropsType) => void}) {
  return (
    <S.List>
        {props.tabItems.map((item, index) => {
            return (
                <li key={index}>
                <S.Link as="button" onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</S.Link>
              </li> 
            )
        })}
  </S.List>
  )
}

export default TabMenu