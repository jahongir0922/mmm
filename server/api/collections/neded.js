import collections from "../../../baza/collections.json";
export default defineEventHandler((event) => {
  const { q = "" } = useQuery(event);
  let queryAnswer = collections.filter((collection) => {
    return collection.id == q;
  });
  return queryAnswer[0];
});
