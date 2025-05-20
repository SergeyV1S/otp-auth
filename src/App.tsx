import { Container } from "@/components/Container";
import { SignIn } from "@/components/SignIn";

import { Button } from "./components/ui";
import { useAuth } from "./hooks";
import { useAppSelector } from "./store/hooks";
import { userSliceSelectors } from "./store/user";

export const App = () => {
  const { userSession } = useAppSelector(userSliceSelectors.getUserState);
  const { logout } = useAuth();

  return (
    <Container>
      {userSession ? (
        <div className='text-center space-y-6'>
          <h1 className='text-xl'>Привет, +{userSession?.phone}!</h1>
          <Button onClick={logout}>Выйти</Button>
        </div>
      ) : (
        <SignIn />
      )}
    </Container>
  );
};
