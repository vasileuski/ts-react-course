import { useState } from "react";

import { Title } from "../Title";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./styles.module.css";
import { useInput } from "../../hooks/useInput";

export const AddPostForm = () => {
  const title = useInput();
  const number = useInput();
  const text = useInput();
  const [image, setImage] = useState("");

  const removeImage = () => {};

  const createNewPost = () => {};

  return (
    <div className="container">
      <div className={styles.addPostIndex}>
        <div className={styles.addPostWrraper}>
          <Title text="Add new post" />
          <div className={styles.addPost}>
            <div className={styles.addText}>
              <Input type="text" placeholder="Title" {...title} />
              <Input type="text" placeholder="Lesson number" {...number} />
              <Input {...text} placeholder="Text" />
            </div>
            <div className={styles.addImg}>
              {image ? (
                <>
                  <img src={image} />
                  <Button
                    text="remove image"
                    onClick={removeImage}
                    type="primary"
                  />
                </>
              ) : (
                <p className={styles.addName}>Image</p>
              )}

              <div className={styles.addBtn}>
                {image ? null : (
                  <>
                    <div style={{ position: "absolute" }}>
                      <Button
                        text="Add"
                        onClick={() => {}}
                        type="primary"
                      ></Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={styles.addManeBtn}>
            <Button text="Add" onClick={createNewPost} type="primary"></Button>
          </div>
        </div>
      </div>
      <img
        src="../img/vectorForAdd.png"
        alt="vectorForAdd"
        className={styles.img}
      />
    </div>
  );
};
