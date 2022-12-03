import foods from "../../../baza/foods.json";
export default defineEventHandler((event) => {
  const { q = "" } = useQuery(event);
  let queryAnswer = foods.filter((food) => {
    return food.category_id == q;
  });
  return queryAnswer;
});
