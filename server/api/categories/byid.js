import categories from "../../../baza/categories.json";
export default defineEventHandler((event) => {
  const { q = "" } = useQuery(event);
  let queryAnswer = categories.filter((category) => {
    return category.id == q;
  });
  return queryAnswer[0];
});
