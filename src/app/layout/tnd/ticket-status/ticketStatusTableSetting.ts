export class TicketStatusTableSetting{
    public static setting = {
    
        //hideSubHeader: true,
        actions : false,
        pager :{
          //display : false,
          perPage : 10
        },
        columns: {
          // ticketNumber: {
          //   title: 'Ticket Number'
          // },
          newTicketumber: {
            title: 'Ticket Num',
            width: '150px'
          },
          trainingName: {
            title: 'Training Name',
            width: '150px'
          },
          subtrainingName: {
            title: 'Sub Training Name',
            width: '150px'
          },
          // empId: {
          //   title: 'Employee ID'
          // },
          employeeName: {
            title: 'Employee Name',
            width: '150px'
          },
          userRole: {
            title: 'Role'
          },
          siteSupervisorName : {
            title : 'Site Supervisor Name',
            width: '150px'
          },
          siteId : {
            title : 'Site Id',
            width: '100px'
          },
        //   circleName: {
        //     title: 'Organization'
        //   },
          // zoneName: {
          //   title: 'Location'
          // },
          // clusterName: {
          //   title: 'Department'
          // },
          // startDate: {
          //   title: 'Start Date'
          // },
          // endDate: {
          //   title: 'End Date'
          // },
          submittedDate: {
            title: 'Submitted Date'
          },
          prePercentage: {
            title: 'Pre Percentage'
          },
          postPercentage: {
            title: 'Post Percentage'
          },
          postStatus: {
            title: 'Post Status'
          }
        }
      }
}