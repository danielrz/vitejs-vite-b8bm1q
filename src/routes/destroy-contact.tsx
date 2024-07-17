import { redirect } from "react-router-dom";
import { deleteContact } from "../api/contact";

export async function action( { params }) {
  const deleted = await deleteContact(params.id)
  return redirect('/contacts')
}