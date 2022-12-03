import foods from "../../../baza/foods.json";
export default defineEventHandler((event) => {
  return foods;
});
