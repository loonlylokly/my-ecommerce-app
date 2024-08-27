import { API_ROUTES, LIMIT_DEFAULT, PAGE_DEFAULT } from "@/shared/lib/constants/common";
import { Filter } from "../lib/types";

type FetchProps = {
  filter: Filter
}

export async function fetchProducts({filter}: FetchProps) {
  if (!filter.limit) filter.limit = LIMIT_DEFAULT;
  if (!filter.page) filter.limit = PAGE_DEFAULT;
  const params = new URLSearchParams({...filter}).toString();
  const res = await fetch(`${API_ROUTES.products}?${params}`);
  return await res.json();
}