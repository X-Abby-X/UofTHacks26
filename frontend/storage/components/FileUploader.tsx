// "use client";

// import { useState } from "react";
// import { supabase } from "../lib/supabaseClient"; // relative import

// type Props = {
//   bucket: string;
//   userID: string;
// };

// export default function FileUploader({ bucket, userID }: Props) {
//   const [file, setFile] = useState<File | null>(null);
//   const [uploading, setUploading] = useState(false);
//   const [message, setMessage] = useState<string | null>(null);
//   const [signedUrl, setSignedUrl] = useState<string | null>(null);

//   const uploadFile = async () => {
//     if (!file) return;

//     setUploading(true);
//     setMessage(null);
//     setSignedUrl(null);

//     // create a unique file name
//     const safeFileName = encodeURIComponent(file.name);
//     const filePath = `${userID}/${Date.now()}-${safeFileName}`;

//     // const filePath = `${userID}/${Date.now()}-${file.name}`;

//     // Upload to private bucket
//     // const { error } = await supabase.storage
//     //   .from(bucket)
//     //   .upload(filePath, file);
//     const { data: uploadData, error } = await supabase.storage.from(bucket).upload(filePath, file);
//     if (error) {
//       setMessage(`❌ Upload failed: ${error.message}`);
//       setUploading(false);
//       return;
//     }
//     console.log("Uploaded file data:", uploadData);
//     setMessage("✅ File uploaded successfully!");

//     // Generate a signed URL (valid 60 seconds)
//     const { data, error: urlError } = await supabase.storage
//       .from(bucket)
//       .createSignedUrl(filePath, 60);

//     if (urlError) {
//       setMessage(`❌ Signed URL error: ${urlError.message}`);
//     } else {
//       setSignedUrl(data.signedUrl);
//     }

//     setUploading(false);
//   };

//   return (
//     <div style={{ border: "1px solid #ccc", padding: "1rem", width: 350 }}>
//       <input
//         type="file"
//         onChange={(e) => setFile(e.target.files?.[0] ?? null)}
//       />

//       <button
//         onClick={uploadFile}
//         disabled={!file || uploading}
//         style={{ marginTop: "0.5rem" }}
//       >
//         {uploading ? "Uploading..." : "Upload"}
//       </button>

//       {message && <p style={{ marginTop: "0.5rem" }}>{message}</p>}

//       {signedUrl && (
//         <div style={{ marginTop: "0.5rem" }}>
//           <p>Preview URL (expires in 60s):</p>
//           <a href={signedUrl} target="_blank" rel="noopener noreferrer">
//             Open File
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }


// VERSION 2
// "use client";

// import { useState } from "react";
// import { supabase } from "../lib/supabaseClient";

// type Props = {
//   bucket: string;
//   userID: string;
// };

// export default function FileUploader({ bucket, userID }: Props) {
//   const [file, setFile] = useState<File | null>(null);
//   const [uploading, setUploading] = useState(false);
//   const [message, setMessage] = useState<string | null>(null);
//   const [signedUrl, setSignedUrl] = useState<string | null>(null);

//   const uploadFile = async () => {
//     if (!file) return;

//     setUploading(true);
//     setMessage(null);
//     setSignedUrl(null);

//     try {
//       // Make filename safe for URLs
//       const safeFileName = encodeURIComponent(file.name);
//       const filePath = `${userID}/${Date.now()}-${safeFileName}`;

//       // Upload to the private bucket
//       const { data: uploadData, error: uploadError } = await supabase.storage
//         .from(bucket)
//         .upload(filePath, file);

//       if (uploadError) {
//         setMessage(`❌ Upload failed: ${uploadError.message}`);
//         setUploading(false);
//         return;
//       }

//       // Confirm file exists before generating signed URL
//       const { data: urlData, error: urlError } = await supabase.storage
//         .from(bucket)
//         .createSignedUrl(filePath, 60); // URL valid for 60 seconds

//       if (urlError) {
//         setMessage(`❌ Signed URL error: ${urlError.message}`);
//       } else {
//         setSignedUrl(urlData.signedUrl);
//         setMessage("✅ File uploaded and signed URL generated!");
//       }
//     } catch (err: any) {
//       setMessage(`❌ Unexpected error: ${err.message}`);
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div style={{ border: "1px solid #ccc", padding: "1rem", width: 350 }}>
//       <input
//         type="file"
//         onChange={(e) => setFile(e.target.files?.[0] ?? null)}
//       />

//       <button
//         onClick={uploadFile}
//         disabled={!file || uploading}
//         style={{ marginTop: "0.5rem" }}
//       >
//         {uploading ? "Uploading..." : "Upload"}
//       </button>

//       {message && <p style={{ marginTop: "0.5rem" }}>{message}</p>}

//       {signedUrl && (
//         <div style={{ marginTop: "0.5rem" }}>
//           <p>Preview URL (expires in 60s):</p>
//           <a href={signedUrl} target="_blank" rel="noopener noreferrer">
//             Open File
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

// VERSION 3
"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

type Props = {
  bucket: string;
  userID: string;
};

export default function FileUploader({ bucket, userID }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [signedUrl, setSignedUrl] = useState<string | null>(null);

  const uploadFile = async () => {
    if (!file) return;

    setUploading(true);
    setMessage(null);
    setSignedUrl(null);

    try {
      // Make filename safe for URLs
      const timestamp = Date.now();
      const safeFileName = encodeURIComponent(file.name);
        const filePath = `${userID}/${timestamp}-${safeFileName}`;

      // Upload the file
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        setMessage(`❌ Upload failed: ${uploadError.message}`);
        return;
      }

      // ✅ Verify the uploaded file exists
      const { data: listData, error: listError } = await supabase.storage
        .from(bucket)
        .list(userID);

      if (listError) {
        setMessage(`❌ Could not verify file: ${listError.message}`);
        return;
      }

        const uploadedFileExists = listData.some((f) => f.name === `${timestamp}-${file.name}` || f.name === safeFileName);
      if (!uploadedFileExists) {
        setMessage(`❌ Uploaded file not found in bucket!`);
        return;
      }

      // Generate signed URL (valid 5 minutes)
      const { data: urlData, error: urlError } = await supabase.storage
        .from(bucket)
        .createSignedUrl(filePath, 300);

      if (urlError) {
        setMessage(`❌ Signed URL error: ${urlError.message}`);
      } else {
        setSignedUrl(urlData.signedUrl);
        setMessage("✅ File uploaded and signed URL generated!");
      }

    } catch (err: any) {
      setMessage(`❌ Unexpected error: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: 350 }}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />

      <button
        onClick={uploadFile}
        disabled={!file || uploading}
        style={{ marginTop: "0.5rem" }}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {message && <p style={{ marginTop: "0.5rem" }}>{message}</p>}

      {signedUrl && (
        <div style={{ marginTop: "0.5rem" }}>
          <p>Preview URL (expires in 5 min):</p>
          <a href={signedUrl} target="_blank" rel="noopener noreferrer">
            Open File
          </a>
        </div>
      )}
    </div>
  );
}