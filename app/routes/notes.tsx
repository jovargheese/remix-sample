import NewNotes, { links as newNoteLinks } from "~/components/NewNotes";

export default function () {
  return (
    <main>
      <NewNotes />
    </main>
  );
}

export function links() {
  return [...newNoteLinks()];
}
