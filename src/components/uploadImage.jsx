import { useState } from "react";
import axios from "axios";

function UploadImage() {
  const [files, setFiles] = useState(null);
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);

  function handleUpload() {
    if (!files) {
      console.log("No file Selected");
      return;
    }
    const fd = new FormData();
    for (let i = 0; i < files.length; i++) {
      fd.append(`file${i + 1}`, files[i]);
    }
    setMsg("Uploading....");
    setProgress((prevState) => {
      return { ...prevState, started: true };
    });
    axios
      .post("http://httpbin.org/post", fd, {
        onUploadProgress: (ProgressEvent) => {
          setProgress((prevState) => {
            return { ...prevState, pc: ProgressEvent.progress * 100 };
          });
        },
        headers: {
          "Custom-Header": "value",
        },
      })
      .then((res) => {
        setMsg("upload successfully");
        console.log(res.data);
      })
      .catch((err) => {
        setMsg("Upload Failed");
        console.error(err);
      });
  }
  return (
    <div>
      <div className="App">
        <h1>Uploading Files</h1>
        <input
          onChange={(e) => {
            setFiles(e.target.files);
          }}
          type="file"
          multiple
        />
        <button onClick={handleUpload}>Upload</button>
        {progress.started && (
          <progress max="100" value={progress.pc}></progress>
        )}
        {msg && <span> {msg}</span>}
      </div>
    </div>
  );
}
export default UploadImage;