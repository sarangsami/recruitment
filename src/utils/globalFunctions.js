export const showDate = (date) =>{
  let finalDate =  date
  .toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
  let time = `${date.getHours()}:${date.getMinutes()}`
  return `${finalDate} ${time}`
 
}