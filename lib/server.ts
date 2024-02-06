"use server";

export async function getProductById() {
  const URL =
    process.env.NODE_ENV === "development"
      ? process.env.DEV_URL
      : process.env.PRO_URL;
  const res = await fetch(`${URL}/api/product/WF-1000XM5`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
}
