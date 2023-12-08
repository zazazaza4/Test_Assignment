import { useState } from 'react';

import { PositionService } from '@/services/position.service';
import { useQuery } from '@tanstack/react-query';

const usePositions = () => {
  const [positions, setPositions] = useState([]);

  const { isLoading, refetch } = useQuery({
    queryKey: ['get positions'],
    queryFn: async () => {
      try {
        const { data } = await PositionService.get();
        setPositions(data.positions);
        return data;
      } catch (error) {
        console.error('Error fetching positions:', error);
        throw error;
      }
    },
    onError: () => {},
  });

  return {
    isLoading,
    positions,
    refetch,
  };
};

export { usePositions };
