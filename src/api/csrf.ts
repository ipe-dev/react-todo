import { get } from "@/lib/http";

type csrfResponse = {
  csrf_token: string
}
export const getCsrfToken = async () => {
  return await get<csrfResponse>(`${process.env.NEXT_PUBLIC_API_URL}/csrf`)
};
