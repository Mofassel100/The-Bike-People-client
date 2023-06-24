import { useEffect, useState } from 'react';

const SellarRole = email => {
  const [isSeller, setSellarRole] = useState(false);
  const [SellarLoadins, setSellarLoaders] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://final-project-server-assignmen.vercel.app/sellar/${email}`)
        .then(res => res.json())
        .then(Sellar => {
          setSellarLoaders(false);
          setSellarRole(Sellar?.isSeller);
        });
    }
  }, [email]);
  return [isSeller, SellarLoadins];
};
export default SellarRole;
