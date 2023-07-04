import React from 'react'
import MUIDataTable from "mui-datatables";
import "./TableSection.css"
import {useReducer,useEffect} from "react"
import socket from '../../../socket/socket';

const columns = ["roomName","nameDevice", "iconName", "pinEsp", "status","consumes","countOn","timeOn","timeOff","dayRunning","dayRunningStatus"];


const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
  filterType: 'checkbox',
};
const listDeviceinitstate = {
  loading: false,
  data: [],
  error: null
}
const listDeviceRD = (state, action) => {
  switch (action.type) {
      case 'GET_API':
          return {
              ...state,
              loading: true
          }
      case 'GET_SUCCESS':
          return {
              ...state,
              loading: false,
              data: action.data,

          }
      case 'GET_ERR':
          return {
              ...state,
              data: [],

              error: action.data
          }
      default:
  }
}
export default function TableSection() {
  const user= JSON.parse(localStorage.getItem("accessToKen"));
  const homeId = JSON.parse(localStorage.getItem("accessToKenHome"));
  const [lists, listDevcedD] = useReducer(listDeviceRD, listDeviceinitstate)
  useEffect(() => {
    async function lisdevice() {
      listDevcedD({
            type: 'GET_API'
        });
        setTimeout(() => {
            try {
                socket.emit("getDevicesToHome", { _id: user._id, homeId: homeId})
                socket.on("getListforHome", list => {
                  listDevcedD({
                        type: 'GET_SUCCESS',
                        data: list,
                    });
                })
            } catch (errr) {
              listDevcedD({
                    type: 'GET_ERR'
                });
            }
        }, 300)

    }
    lisdevice();
}, [])
  
  
  return (
    <div className='tablesection'>
      {lists.loading?"":
      <MUIDataTable
                        title={"Device Data Show table"}
                        data={lists.data}
                        columns={columns}
                        options={options}
                    />
      }
    </div>
  )
}
