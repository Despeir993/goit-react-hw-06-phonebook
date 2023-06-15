export const getFilter = ({filter}) => filter;

export const getContacts = ({ contacts: { contacts } }) => contacts;
export const getVisibleContacts = ({ contacts: { contacts }, filter }) => {
  if (!filter) {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

