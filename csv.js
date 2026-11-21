function toCsv(notes) {
  const guard = (value) => {
    const text = String(value);
    return /^[=+\-@]/.test(text) ? `'${text}` : text;
  };
  const quote = (value) => `"${guard(value).replaceAll('"', '""')}"`;
  return (
    [
      "id,title",
      ...notes.map((note) => `${guard(note.id)},${quote(note.title)}`),
    ].join("\r\n") + "\r\n"
  );
}

module.exports = { toCsv };
