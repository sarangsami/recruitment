export const showDate = (date) =>{
  let finalDate =new Date(date)
  .toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
  let time = `${new Date (date).getHours()}:${new Date (date).getMinutes()}`
  return `${finalDate} ${time}`
 
}

export const showTime = (date) =>{
  return  `${new Date (date).getHours()}:${new Date (date).getMinutes()}`
}