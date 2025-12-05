      const Typewriter = () => {
            const [text, setText] = React.useState("MY "); // Start with "MY"
            const [index, setIndex] = React.useState(0); // Index to track the current character being typed
            const [currentText, setCurrentText] = React.useState("WORLDS"); // The next text to type
            const speed = 300; // Typing speed in milliseconds
    
            const texts = [" WORLDS ", "cybersecutity training", "cybersecurity courses"]; // Array of texts to type endlessly after "MY"
    
            React.useEffect(() => {
              let i = 0;
              const typingInterval = setInterval(() => {
                setText((prevText) => prevText + currentText[i]); // Add one character at a time
                i++;
                if (i === currentText.length) {
                  clearInterval(typingInterval); // Stop when the current text is completely typed
                  setTimeout(() => {
                    setText("MY"); // Keep "MY" fixed
                    setCurrentText(texts[(index + 1) % texts.length]); // Switch to the next text
                    setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to the next text in the array
                  }, 1000); // Wait for 1 second before switching to the next text
                }
              }, speed);
    
              return () => clearInterval(typingInterval); // Cleanup interval when component unmounts
            }, [currentText, index]);
    
            return (
              <h1
                className="w3-jumbo w3-text-white w3-hide-small w3-animate-left"
                style={{ whiteSpace: "nowrap" }}
              >
                <b>{text}</b>
              </h1>
            );
          };
    
          // Rendering the Typewriter component inside the 'root' element
          ReactDOM.render(<Typewriter />, document.getElementById("typewritter"));