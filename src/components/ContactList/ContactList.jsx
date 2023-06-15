import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getVisibleContacts } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.wraperContactList}>
      <ul className={css.conactList}>
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id} className={css.contactListItem}>
            {name}: {number}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
