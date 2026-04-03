export default async function sub(email, name) {
  const res = await fetch("http://localhost:8000/create_sub", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, name }),
  });

  const data = await res
    .json()
    .catch(() => ({ error: "something went wrong" }));

  if (!res.ok) {
    return { success: false, field: data.field, error: data.error };
  }

  return { success: true, data };
}
