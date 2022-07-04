import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      <span>Find contacts by name:</span>
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};
