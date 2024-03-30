import React, { ChangeEvent } from "react";

const OnChange = () => {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation(); //버블링 중지 메서드
    e.preventDefault();
    console.log("onChangeValue", e.target.value);
  };

  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log("onChangeValue", e.target.checked);
  };
  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log("onChangeFiles", e.target.files);
  };
  return (
    <div>
      <p>onChange</p>
      <input
        type="text"
        onChange={onChangeValue}
        placeholder="type some text"
        defaultValue="Hello"
      />
      <input type="checkbox" onChange={onChangeChecked} defaultChecked />
      <input type="file" onChange={onChangeFiles} multiple accept="images/*" />
    </div>
  );
};

export default OnChange;
