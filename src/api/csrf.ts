import { get } from "@/lib/http";

type csrfResponse = {
  csrf_token: string
}
export const getCsrfToken = async () => {
  return await get<csrfResponse>("/csrf", {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });
};
