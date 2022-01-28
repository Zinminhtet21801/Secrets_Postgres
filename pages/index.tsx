import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Note from "../components/Note";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { HomePage } from "../components/Home";

export default function Home() {
  const [notes, setNotes] = useState<note[]>([]);

  useEffect(() => {
    fetch("https://secret-app-api.onrender.com/todo/get", {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleNoteCreate = (note: note) => {
    const newNotesState: note[] = [...notes];
    newNotesState.push(note);
    setNotes(newNotesState);
  };
  return (
    <Box>
      <Box maxW={"1050px"} marginInline="auto" p={5}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header handleNoteCreate={handleNoteCreate} />
        <HomePage notes={notes} setNotes={setNotes} />
        <Footer />
      </Box>
    </Box>
  );
}