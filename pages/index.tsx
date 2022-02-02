import { Box, Spinner } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Note from "../components/Note";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { HomePage } from "../components/Home";
import ReactPaginate from "react-paginate";

export async function getStaticProps() {
  const res = await fetch("https://secrets-server.onrender.com/getAll/0");
  const data = await res.json();
  return {
    props: {
      preNotes: data[0],
      preNotesCount: data[1],
    },
  };
}

export interface HomeProps {
  preNotes: note[];
  preNotesCounts: number;
}

const Home : React.SFC<HomeProps> =({ preNotes, preNotesCounts }) => {
  const [notes, setNotes] = useState<note[]>(preNotes);
  const [notesCount, setNotesCount] = useState<number>(preNotesCounts);
  const [pageOffset, setPageOffset] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // setIsLoading(true);
    const getData = async () => {
      await fetch(`https://secrets-server.onrender.com/getAll/${pageOffset}`, {
        method: "get",
      })
        .then((res) => res.json())
        .then((data) => {
          setNotes(data[0]);
          setNotesCount(data[1]);
        });
      // setIsLoading(false);
    };
    getData();
  }, [pageOffset, notesCount]);

  const handleNoteCreate = (note: note) => {
    setNotesCount(notesCount + 1);
    // const newNotesState: note[] = [...notes];
    // newNotesState.push(note);
    // setNotes(newNotesState);
  };


  if (isLoading)
    return (
      <Box
        w={"100vw"}
        h={"100vh"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
      >
        <Spinner size="xl" color="red.500" />
      </Box>
    );
  return (
    <Box>
      <Box maxW={"1050px"} marginInline="auto" p={5} minH={"100vh"}>
        <Head>
          <title>Secrets</title>
          <meta name="description" content="U can post your secrets safely here. " />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header handleNoteCreate={handleNoteCreate} />
        <HomePage notes={notes} setNotes={setNotes} />

        {notesCount > 12 && (
          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageCount={Math.ceil(notesCount / 12)}
            marginPagesDisplayed={2}
            // pageRangeDisplayed={3}
            containerClassName="pagination"
            activeClassName="active"
            forcePage={pageOffset}
            onPageChange={(e) => setPageOffset(e.selected)}
          />
        )}
        <Footer />
      </Box>
    </Box>
  );
}

export default Home;



