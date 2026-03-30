export default async function sub(email, name) {
  const res = await fetch("http://localhost:8000/create_sub", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, name }),
  });

  if (!res.ok) {
    const data = await res
      .json()
      .catch(() => ({ error: "something went wrong" }));
    return { success: false, error: data.error };
  }

  const data = await res.json();
  return { success: true, data };
}
