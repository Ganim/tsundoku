import Link from 'next/link';
import { ROTAS } from '@/constants/rotas';
import { Person } from '@material-ui/icons';

import { LinkButton } from './styles';

export function SignInButton() {
  // TODO: criar um hook para o signIn e signOut que verifica se o usuário está logado ou não.
  // const [session] = useSession();

  // TODO: adicionar um icone de login no assets e importar aqui, material-ui/icons não tem. 🤡
  return (
    <LinkButton>
      <Link href={ROTAS.LOGIN}>
        <Person />
      </Link>
    </LinkButton>
  );
}
