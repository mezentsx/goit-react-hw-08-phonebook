export const getFilter = state => state.contacts.filter;
const getContacts = state => state.contacts.items;

export const getVisibleContacts = state => {
  const filter = getFilter(state);
  const contacts = getContacts(state);

  const normalizeFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
};

