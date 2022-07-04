import {
  ContactListList,
  ContactListItem,
  ContactsListText,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListList>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactsListText>
            <span>{name}: </span>
            <span>{number}</span>
          </ContactsListText>
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </ContactListItem>
      ))}
    </ContactListList>
  );
};
