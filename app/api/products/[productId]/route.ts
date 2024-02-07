import products from "@/data/dummy.json";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { productId: string } },
) {
  const productId = params.productId;
  const productData = products.find((product) => product.id === productId);

  if (!productData)
    return NextResponse.json({ error: "Product Not Found" }, { status: 404 });

  return Response.json(productData);
}
