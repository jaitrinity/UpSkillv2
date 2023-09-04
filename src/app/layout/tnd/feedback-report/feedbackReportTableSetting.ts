export class FeedbackReportTableSetting{
    public static setting = {
    
        //hideSubHeader: true,
        actions : false,
        pager :{
          //display : false,
          perPage : 10
        },
        columns: {
         TICKET_NUM_NEW: {
            title: 'TICKET_NUM_NEW',
            width : '160px'
          },
        //   EMPLOYEE_ID: {
        //     title: 'EMPLOYEE_ID'
        //   },
         EMPLOYEE_NAME:{
              title: 'EMPLOYEE_NAME',
              width : '160px'
          },
        //   MASTER_ID:{
        //       title: 'MASTER_ID'
        //   },
          TRAINING_NAME: {
            title: 'TRAINING_NAME',
            width : '160px'
          },
          SUB_TRAINING_NAME: {
            title: 'SUB_TRAINING_NAME',
            width : '160px'
          },
          F1_Ans: {
            title: 'F1_Ans',
            width : '160px',
            type: 'html',
            valuePrepareFunction : (cell, row) =>{
              if(row.TICKET_NUM_NEW == ""){
                return `<span title="${row.F1_Ans}"> F1 Question </span>`;
              }
              else{
                return row.F1_Ans;
              }
            }
          },
          F2_Ans: {
            title: 'F2_Ans',
            width : '160px',
            type: 'html',
            valuePrepareFunction : (cell, row) =>{
              if(row.TICKET_NUM_NEW == ""){
                return `<span title="${row.F2_Ans}"> F2 Question </span>`;
              }
              else{
                return row.F2_Ans;
              }
            }
          },
          F3_Ans: {
            title: 'F3_Ans',
            width : '160px',
            type: 'html',
            valuePrepareFunction : (cell, row) =>{
              if(row.TICKET_NUM_NEW == ""){
                return `<span title="${row.F3_Ans}"> F3 Question </span>`;
              }
              else{
                return row.F3_Ans;
              }
            }
          },
          F4_Ans: {
            title: 'F4_Ans',
            width : '160px',
            type: 'html',
            valuePrepareFunction : (cell, row) =>{
              if(row.TICKET_NUM_NEW == ""){
                return `<span title="${row.F4_Ans}"> F4 Question </span>`;
              }
              else{
                return row.F4_Ans;
              }
            }
          },
          F5_Ans: {
            title: 'F5_Ans',
            width : '160px',
            type: 'html',
            valuePrepareFunction : (cell, row) =>{
              if(row.TICKET_NUM_NEW == ""){
                return `<span title="${row.F5_Ans}"> F5 Question </span>`;
              }
              else{
                return row.F5_Ans;
              }
            }
          },
          F6_Ans: {
            title: 'F6_Ans',
            width : '160px',
            type: 'html',
            valuePrepareFunction : (cell, row) =>{
              if(row.TICKET_NUM_NEW == ""){
                return `<span title="${row.F6_Ans}"> F6 Question </span>`;
              }
              else{
                return row.F6_Ans;
              }
            }
          },
          F7_Ans: {
            title: 'F7_Ans',
            width : '160px',
            type: 'html',
            valuePrepareFunction : (cell, row) =>{
              if(row.TICKET_NUM_NEW == ""){
                return `<span title="${row.F7_Ans}"> F7 Question </span>`;
              }
              else{
                return row.F7_Ans;
              }
            }
          },
          F8_Ans: {
            title: 'F8_Ans',
            width : '160px',
            type: 'html',
            valuePrepareFunction : (cell, row) =>{
              if(row.TICKET_NUM_NEW == ""){
                return `<span title="${row.F8_Ans}"> F8 Question </span>`;
              }
              else{
                return row.F8_Ans;
              }
            }
          },
          F9_Ans: {
            title: 'F9_Ans',
            width : '160px',
            type: 'html',
            valuePrepareFunction : (cell, row) =>{
              if(row.TICKET_NUM_NEW == ""){
                return `<span title="${row.F9_Ans}"> F9 Question </span>`;
              }
              else{
                return row.F9_Ans;
              }
            }
          }
        }
      }
}