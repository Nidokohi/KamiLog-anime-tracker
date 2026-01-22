const MAX_RETRIES = 5;
const BASE_DELAY = 1000; // 1 second

export async function fetchWithRetry(url: string, options?: RequestInit, retries = MAX_RETRIES): Promise<Response> {
    for (let attempt = 0; attempt < retries; attempt++) {
        const res = await fetch(url, options);

        if (res.status === 429) {
            // Rate-limited: wait and retry
            const waitTime = BASE_DELAY * Math.pow(2, attempt); // exponential backoff
            console.warn(`429 received, retrying in ${waitTime}ms (attempt ${attempt + 1})`);
            await new Promise(resolve => setTimeout(resolve, waitTime));
            continue;
        }

        return res;
    }

    throw new Error(`Failed to fetch after ${retries} retries: ${url}`);
}
