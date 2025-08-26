export const fetchClient = async <T>(url: string): Promise<T> => {
  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    const data = await res.json();

    return (data?.results ?? data) as T;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    throw error;
  }
};
