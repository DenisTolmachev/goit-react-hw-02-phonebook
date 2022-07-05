import {
  ContactListList,
  ContactListItem,
  ContactsListText,
} from './ContactList.styled';
import {Button} from '../common/common.style'

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListList>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactsListText>
            <span>{name}: </span>
            <span>{number}</span>
          </ContactsListText>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </ContactListItem>
      ))}
    </ContactListList>
  );
};
