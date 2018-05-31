import React from 'react';
export interface PropsInterface {
  counter: number;
}
const SubView: React.SFC<PropsInterface> = ({ counter }) => (
  <div>This is a subview created when the counter was: {counter || 0}</div>
);
export default SubView;
