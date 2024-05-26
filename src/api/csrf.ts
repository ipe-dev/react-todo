type csrfResponse = {
  csrfToken: string
}
const getCsrfToken = async<csrfResponse> () => {
  return await fetch(`${process.env.REACT_APP_API_URL}/csrf`, {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });

};
