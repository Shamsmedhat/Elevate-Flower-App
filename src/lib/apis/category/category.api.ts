export async function getCategories() {
  const res = await fetch(process.env.API + "/categories", {
    cache: "no-cache",
  });

  const payload: APIResponse<PaginatedResponse<{ categories: Category[] }>> = await res.json();

  if ("error" in payload) {
    throw new Error(`Error fetching categories : ${payload.error}`);
  }

  return payload;
}
