import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigation, useSubmit } from "react-router-dom";
import { getContacts, createContact } from "../api/contact.js"
import { ChangeEvent, useEffect, useRef } from "react";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  const contacts = await getContacts(q);
  return { contacts, q };
}

export async function action() {
  const contact  = await createContact();
  console.log('id', contact.id)
  return redirect(`/contacts/${contact.id}/edit`);
  // return { contact }
}

export default function Contacts() {
  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();
  const search = useRef(null)
  const submit = useSubmit()

  const searching = navigation.location && new URLSearchParams(navigation.location.search).has('q')

  useEffect(() => {
    search.current.value = q // fixing a bug when searching then pressing the back button
  }, [q])

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              ref={search}
              className={searching ? 'loading' : ''}
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const isFirstSearch = q === null // so we don't see in browser history every typing q value
                submit(e.currentTarget.form, {
                  replace: !isFirstSearch
                })}
              }
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={!searching}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
        {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`/contacts/${contact.id}`}
                    className={({ isActive, isPending }) => isActive ? 'active' : isPending ? 'pending' : ''}
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail" className={navigation.state === 'loading' ? 'loading' : ''}>
        <Outlet />
      </div>
    </>
  );
}