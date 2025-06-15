export async function load() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=8",
  );
  if (!res.ok) throw new Error("API error");
  const posts = await res.json();
  return { posts };
}
