import { useState } from "react";

// eslint-disable-next-line react-hooks/rules-of-hooks
const [state, setState] = useState(false);
// `state` is inferred to be a boolean
// `setState` only takes booleans


// many hooks are initialized with null-ish default values
// eslint-disable-next-line @typescript-eslint/no-unused-vars, react-hooks/rules-of-hooks
const [user, setUser] = useState<User | null>(null);
// later...
setUser(newUser);


// use type assertions if a state is initialized soon after setup and always has a value after:
// eslint-disable-next-line @typescript-eslint/no-redeclare, react-hooks/rules-of-hooks
const [user, setUser] = useState<User>({} as User);

// later...
setUser(newUser);