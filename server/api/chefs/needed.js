import chefs from "../../../baza/chefs.json";
export default defineEventHandler((event) => {
    const {q=""}=useQuery(event);
    let queryAnswer=chefs.filter((chef)=>{
        return chef.id==q
    })
  return queryAnswer[0];
});
