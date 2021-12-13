// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";
import pdf from "../../assets/resume/test.pdf";
// import Particle from "./Particle";
// export default function Resume() {
//   return (
//     <div>
//       <Document file="https://raw.githubusercontent.com/rsolov23/new-react-portfolio/blob/main/src/assets/resume/test.pdf">
//         <Page />
//       </Document>

//       <a
//         align="center"
//         id="download"
//         href={require(`../assets/resume/test.pdf`).default}
//         download="test.pdf"
//         target="_blank"
//         rel="noreferrer"
//       >
//         <button className="name noselect">Download</button>
//       </a>
//     </div>
//   );
// }
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default function Resume() {
  return (
    <div>
      {/* <Particle /> */}
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Document file={pdf}>
              <Page pageNumber={1} />
            </Document>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    </div>
  );
}
