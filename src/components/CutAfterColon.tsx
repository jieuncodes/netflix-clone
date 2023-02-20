function CutAfterColon(text: string) {
  const splitString = text.split(":");

  return (
    <>
      {splitString.length === 2 ? (
        <>
          <div>{splitString[0]}</div>
          <div>{splitString[1]}</div>
        </>
      ) : (
        <div>{text}</div>
      )}
    </>
  );
}

export default CutAfterColon;
