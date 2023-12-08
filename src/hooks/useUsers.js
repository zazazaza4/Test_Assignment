import { useState } from 'react';

import { UserService } from '@/services/user.service';
import { useQuery } from '@tanstack/react-query';

const useUsers = ({ page, count }) => {
  const [users, setUsers] = useState([]);
  const [isOver, setIsOver] = useState(false);
  const [usersLength, setUsersLength] = useState(0);

  const { isLoading, refetch } = useQuery({
    queryKey: ['get games'],
    queryFn: async () => {
      try {
        const { data } = await UserService.getByPage(page, count);

        if (page === 1) {
          setUsers(data.users);
        } else {
          setUsers((prev) => [...prev, ...data.users]);
        }

        setUsersLength(data.total_users);

        if (data.total_users === usersLength) {
          setIsOver(true);
        } else {
          setIsOver(false);
        }

        return data;
      } catch (error) {
        console.log(error);
      }
    },
    onError: () => {},
  });

  return {
    isLoading,
    users,
    refetch,
    isOver,
    usersLength,
  };
};

export { useUsers };
