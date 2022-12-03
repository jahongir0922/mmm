import blog from "../../../baza/blog.json";
export default defineEventHandler((event) => {
  const { q = "" } = useQuery(event);
  let queryAnswer = blog.filter((blog) => {
    return blog.food_id == q;
  });
  return queryAnswer[0];
});
