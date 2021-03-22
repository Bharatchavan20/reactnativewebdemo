import React from "react";
import { ListItem } from "react-native-elements";

class App extends React.Component {
  render() {
    return (
      <ListItem
        leftAvatar={{
          title: name[0],
          source: { uri: avatar_url },
          showEditButton: true,
        }}
        title={name}
        subtitle={role}
        chevron
      />
    );
  }
}

export default App;
