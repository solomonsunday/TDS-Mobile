import {useMemo} from 'react';
import {
  setCredential,
  useSelectUser,
  onboardStatus,
  User,
  useAppLoading,
  Auth,
  isGuestSelector,
} from '.';
import {useAppSelector, useAppDispatch} from '../hooks';

export const useAuth = () => {
  const user: User | null | undefined = useAppSelector(useSelectUser);
  const didOnboard = useAppSelector(onboardStatus);
  const appLoading = useAppSelector(useAppLoading);
  const isGuest = useAppSelector(isGuestSelector);

  return useMemo(
    () => ({user: user, didOnboard, appLoading, isGuest}),
    [user, didOnboard, appLoading, isGuest],
  );
};

export const useLogout = () => {
  const dispatch = useAppDispatch();
  return () => dispatch(setCredential({} as Auth));
};
