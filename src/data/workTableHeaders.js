export const columns = [{
    selector: row => row.workNumber,
    name: 'מספר עבודה',
}, {
    selector: row => row.classification,
    name: 'סיווג',
}, {
    selector: row => row.startDate,
    name: 'תאריך התחלה',
}, {
    selector: row => row.dueEndDate,
    name: 'תאריך יעד לסיום',

}, {
    selector: row => row.endDate,
    name: 'תאריך סיום',
}, {
    selector: row => row.status,
    name: 'סטטוס',
},
{
    selector: row => row.name,
    name: 'שם',
},
{
    selector: row => row.phoneNum,
    name: 'טלפון',
},
{
    selector: row => row.contractorRank,
    name: 'ציון קבלן',
},
{
    selector: row => row.facilityNum,
    name: 'מספר מתקן',
},
{
    selector: row => row.locationName,
    name: 'מיקום',
},
]


const headers2 = [{
    field: 'workNumber',
    column: 1,
    headerName: 'מספר עבודה',
    width: 100,
    isEditable: false,
}, {
    field: 'classification',
    column: 2,
    headerName: 'סיווג',
    width: 100,
    isEditable: false,
}, {
    field: 'startDate',
    column: 3,
    headerName: 'תאריך התחלה',
    width: 80,
    isEditable: false,
}, {
    field: 'dueEndDate',
    column: 4,
    headerName: 'תאריך יעד לסיום',
    width: 80,
    isEditable: false,
}, {
    field: 'endDate',
    column: 5,
    headerName: 'תאריך סיום',
    width: 180,
}, {
    field: 'status',
    column: 6,
    headerName: 'סטטוס',
    width: 80,
    isEditable: false
},
{
    field: 'userName',
    column: 7,
    headerName: 'שם',
    width: 180,
    isEditable: false
},
{
    field: 'userPhone',
    column: 8,
    headerName: 'מספר',
    width: 120,
    isEditable: false
},
{
    field: 'ranking',
    column: 9,
    headerName: 'ציון קבלן',
    width: 80,
    isEditable: false
},
{
    field: 'facilityNum',
    column: 10,
    headerName: 'מספר מתקן',
    width: 60,
    isEditable: false
},
{
    field: 'locationName',
    column: 11,
    headerName: 'מיקום',
    width: 180,
    isEditable: false
},
]