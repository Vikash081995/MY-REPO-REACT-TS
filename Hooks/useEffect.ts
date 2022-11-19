const [name, setName] = useState("Stefan");

useEffect(() => {
  document.title = `Hello ${name}`;
}, [name]);
