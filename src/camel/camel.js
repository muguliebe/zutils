const _ = require('lodash')

let str = `
Idx
OrderNo
UserID
P_Idx
Service_Type
StartDate
EndDate
Staff_ID
CancelDate
RegDate
ReqCertDate
ReqCertFile
MoneyCheck
DocCheck
CertiCheck
ExamCheck
MoneyPrice
CertiFrom
CertiNo
`
const result = str.split('\n')

result.forEach((str) => {
  str = _.camelCase(str)
  console.log(str)
})
