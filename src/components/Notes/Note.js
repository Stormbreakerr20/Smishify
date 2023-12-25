import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { useRef } from "react";
import api from "../../api";
import { auth } from "../../firebase";
import Loading from "../Loading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Note() {
  const ref = useRef(null);
  const refClose = useRef(null);

  const EditNote = ({ title, description, tag, id }) => {
    setAddNote(false);
    setNote({ title, description, tag, id });
    ref.current.click();
  };

  const AddNote = () => {
    ref.current.click();
  };
  const [loading, setLoading] = React.useState(false);

  const DeleteNote = async (note_id) => {
    setLoading(true);
    await api.delete(`notes/deletenote/${note_id}`);
    fetchNotes(id);
    setLoading(false);
    toast.success("Note Deleted Successfully");
  };

  const [id, setId] = React.useState("");

  React.useEffect(() => {
    setLoading(true);
    auth.onAuthStateChanged(async (user) => {
      setId(user.uid);
      fetchNotes(user.uid);
      setLoading(false);
    });
  }, []);

  const [addNote, setAddNote] = React.useState(true);

  const fetchNotes = async (userid) => {
    const res = await api.post(`notes/fetchallnotes`, { id: userid });
    setNotes(res.data);
  };

  const [notes, setNotes] = React.useState([]);

  const handleSubmit = async () => {
    setLoading(true);
    if (addNote) {
      const res = await api.post(`notes/addnote`, {
        title: note.title,
        description: note.description,
        tag: note.tag,
        id: id,
      });
      setNotes([...notes, res.data]);
      
    } else {
      const res = await api.put(`notes/updatenote/${note.id}`, {
        title: note.title,
        description: note.description,
        tag: note.tag,
        id: id,
      });
      setNote({});
      setNotes([...notes, res.data]);
    }
    setLoading(false);
    refClose.current.click();
  };
  
  const [note, setNote] = React.useState({});

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const convertTimestampToMMDDYYYY = (timestamp) => {
    const date = new Date(timestamp);
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    const year = date.getUTCFullYear().toString();
    
    return `${month}/${day}/${year}`;
  };


  return (
    <div className="min-h-[100vh] max-w-[100vw] flex items-center flex-col gap-5 pt-[6rem]">
      <div className="text-5xl">Notes</div>
      {loading ? (
        <div className="text-2xl">
          <Loading />
        </div>
      ) : (
        <>
          <div className="cursor-pointer flex items-center gap-1 text-lg" onClick={AddNote}>
            Add Notes <IoIosAddCircle className="inline-block" />
          </div>
          <div className="flex flex-wrap gap-4 ml-10 mb-5">
            {notes.map((note) => (
              <div
                className="min-h-[50vh] w-[30vw] bg-[#FFF690] text-black p-3 rounded-md flex flex-col justify-between"
                key={note._id}
              >
                <div className="flex flex-col gap-4">
                  <div className="text-2xl font-semibold">{note.title}</div>
                  <div>{note.description}</div>
                </div>
                <div className="flex justify-between items-center ">  
                  <div className="flex flex-col gap-1 ">
                    <div className="text-sm">{note.tag}</div>
                    <div className="text-sm">{convertTimestampToMMDDYYYY(note.date)}</div>
                  </div>
                  <div className="flex gap-1 text-lg">
                    <FaTrashAlt
                      className="inline-block cursor-pointer"
                      onClick={() => DeleteNote(note._id)}
                    />
                    <FaRegEdit
                      className="inline-block cursor-pointer"
                      onClick={() =>
                        EditNote({
                          title: note.title,
                          description: note.description,
                          tag: note.tag,
                          id: note._id,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <button
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        ref={ref}
        hidden
      >
        Toggle modal
      </button>
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                {addNote ? "Add Note" : "Edit Note"}
              </h3>
              <button
                type="button"
                class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
                onClick={() => setAddNote(true)}
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <div class="p-4 md:p-5">
              <form class="space-y-4" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="add title"
                    required
                    onChange={onChange}
                    value={note.title}
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    id="description"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="add description"
                    required
                    onChange={onChange}
                    value={note.description}
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tag
                  </label>
                  <input
                    type="text"
                    name="tag"
                    id="tag"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="add tag"
                    onChange={onChange}
                    value={note.tag}
                  />
                </div>

                <button
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  ref={refClose}
                  onClick={handleSubmit}
                >
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
