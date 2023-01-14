// import { useEffect, useRef, useState } from "react";

// type Options = {
//   onCompleted?: any;
//   onError?: any;
// };

// export default function useDynamicSVGImport(
//   name: string,
//   options: Options = {
//     onCompleted: null,
//     onError: null,
//   }
// ) {
//   const ImportedIconRef = useRef(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState();

//   const { onCompleted, onError } = options;
//   useEffect(() => {
//     setLoading(true);
//     const importIcon = async () => {
//       try {
//         ImportedIconRef.current = Icons[name];
//         if (onCompleted) {
//           onCompleted(name, ImportedIconRef.current);
//         }
//       } catch (err) {
//         if (onError) {
//           onError(err);
//         }
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     importIcon();r
//   }, [name, onCompleted, onError]);

//   return { error, loading, SvgIcon: ImportedIconRef.current };
// }
