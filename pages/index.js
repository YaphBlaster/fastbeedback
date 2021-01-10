import { Button, Code, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useAuth } from "@/lib/auth";

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <main>
        <Heading fontFamily="inherit">Fast Feedback</Heading>

        <Text>
          Current User: <Code>{auth.user ? auth.user.email : "None"}</Code>
        </Text>

        {!auth.user && (
          <Button onClick={auth.signinWithGithub}>Sign In With Github</Button>
        )}
        {auth.user && <Button onClick={(e) => auth.signout()}>Sign Out</Button>}
      </main>
    </div>
  );
}
