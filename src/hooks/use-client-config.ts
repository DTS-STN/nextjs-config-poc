import { useQuery } from '@tanstack/react-query';

const fetchFn = async () => (await fetch('/api/client-config')).json();
const fetchOptions = { cacheTime: Infinity, refetchOnMount: false, staleTime: Infinity };

/**
 * Hook to fetch client configs from the /api/client-config endpoint.
 * Usage: const { isLoading, error, clientConfig, isFetching } = useClientConfig()
 */
export const useClientConfig = () => {
  const { isLoading, error, data, isFetching } = useQuery({ queryKey: ['client-config'], queryFn: fetchFn, ...fetchOptions });
  return { isLoading, error, clientConfig: data, isFetching };
};
