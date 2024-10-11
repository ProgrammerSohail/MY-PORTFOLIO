const TypedEffect = ({
  strings,
  typeSpeed = 80,
  backSpeed = 50,
  loop = true,
}) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[currentStringIndex];
    let timeout;

    const typeChar = () => {
      if (!isDeleting && currentText !== currentString) {
        setCurrentText((prev) => prev + currentString[prev.length]);
        timeout = setTimeout(typeChar, typeSpeed);
      } else if (isDeleting && currentText !== "") {
        setCurrentText((prev) => prev.slice(0, -1));
        timeout = setTimeout(typeChar, backSpeed);
      } else if (currentText === currentString && !isDeleting) {
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      } else if (currentText === "" && isDeleting) {
        setIsDeleting(false);
        setCurrentStringIndex((prevIndex) =>
          loop
            ? (prevIndex + 1) % strings.length
            : prevIndex < strings.length - 1
            ? prevIndex + 1
            : prevIndex
        );
      }
    };

    timeout = setTimeout(typeChar, isDeleting ? backSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [
    currentStringIndex,
    currentText,
    isDeleting,
    strings,
    typeSpeed,
    backSpeed,
    loop,
  ]);

  return <span>{currentText}</span>;
};
export default TypedEffect;
