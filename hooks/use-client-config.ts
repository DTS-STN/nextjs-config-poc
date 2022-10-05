import { useQuery } from "@tanstack/react-query"

const fetchFn = async () => (await fetch('/api/client-config')).json()
const fetchOptions = { cacheTime: Infinity, refetchOnMount: false, staleTime: Infinity }

/**
 * Hook to fetch client configs from the /api/client-config endpoint.
 * Usage: const { isLoading, error, clientConfig, isFetching } = useClientConfig()
 */
const useClientConfig = () => {
  const { isLoading, error, data, isFetching } = useQuery(['client-config'], fetchFn, fetchOptions)
  return { isLoading, error, clientConfig: data, isFetching }
}

export default useClientConfig