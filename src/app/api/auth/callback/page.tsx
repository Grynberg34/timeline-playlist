'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setToken } from '@/store/actions/spotifyActions';

const Callback = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const fetchAccessToken = async () => {
      const hash = window.location.hash.substring(1);
      const urlParams = new URLSearchParams(hash);
      const accessToken = urlParams.get('access_token');

      if (accessToken) {
        try {
          dispatch(setToken({ accessToken }));
          router.push('/');
        } catch (error) {
          console.error('Error handling the access token:', error);
        }
      } else {
        console.error('No access token found');
      }
    };

    fetchAccessToken();
  }, []);

  return (
    <div className='callback'>
      <img className='callback__img' src="/loading.gif" alt="" />
    </div>
  )
};

export default Callback;
