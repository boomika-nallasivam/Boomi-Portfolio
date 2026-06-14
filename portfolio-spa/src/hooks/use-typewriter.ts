import { useEffect, useState } from "react";

export function useTypewriter(words: string[], opts?: { typeSpeed?: number; deleteSpeed?: number; pause?: number }) {
  const { typeSpeed = 70, deleteSpeed = 40, pause = 1500 } = opts ?? {};
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((p) => p + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1),
          );
        },
        deleting ? deleteSpeed : typeSpeed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, i, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
