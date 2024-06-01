export const get = async <T>(url: string, options: RequestInit = {}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
      options
    );
    if (!response.ok) {
      throw new Error("get処理失敗");
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postWithCsrfToken = async <T>(
  csrfToken: string,
  url: string,
  options: RequestInit = {}
) => {
  options.headers = {
    ...options.headers,
    "X-CSRF-TOKEN": csrfToken,
  };
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
      options
    );
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
