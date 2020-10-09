import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function About() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    router.replace('/');
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>You should never see this</>;
}
