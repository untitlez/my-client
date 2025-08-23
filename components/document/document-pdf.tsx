"use client";

import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";

import { fieldItems } from "@/lib/constant-form";
import { FormType } from "@/validators/form.validator";

Font.register({
  family: "Kanit",
  src: "/fonts/Kanit-Regular.ttf",
  fontWeight: "normal",
});

Font.register({
  family: "Kanit",
  src: "/fonts/Kanit-Bold.ttf",
  fontWeight: "bold",
});

interface DocumentPdfProps {
  data: FormType;
}

export const DocumentPdf = ({ data }: DocumentPdfProps) => {
  const items = [
    { label: fieldItems.classLevel.label, value: data.classLevel },
    { label: fieldItems.subject.label, value: data.subject },
    { label: fieldItems.unitName.label, value: data.unitName },
    { label: fieldItems.objectives.label, value: data.objectives },
    { label: fieldItems.activities.label, value: data.activities },
    { label: fieldItems.assessment.label, value: data.assessment },
  ];

  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Document>
        <Page size="A4" style={styles.page}>
          {/* Header  */}
          <View>
            <Text style={styles.header}>แผนการสอน :</Text>
          </View>

          {/* Table */}
          <View style={styles.table}>
            {items.map((item, i) => (
              <View key={i} style={styles.row}>
                <Text style={styles.headerCell}>{item.label} :</Text>
                <Text style={styles.cell}>{item.value}</Text>
              </View>
            ))}
          </View>

          {/* Image */}
          <View style={styles.imageContainer}>
            <Image src={data.image} style={styles.image} />
          </View>

          <View style={styles.footer}>
            <Text>ลงชื่อผู้จัดทำ :</Text>
            <View style={styles.signatureLine} />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    fontFamily: "Kanit",
    fontSize: 14,
    padding: 48,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
  },
  table: {
    display: "flex",
    flexDirection: "column",
    marginTop: 24,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#aaa",
    paddingVertical: 8,
  },
  headerCell: {
    width: "30%",
  },
  cell: {
    width: "100%",
    textAlign: "center",
    wordBreak: "break-word",
    whiteSpace: "normal",
  },
  imageContainer: {
    justifyContent: "center",
  },
  image: { width: "100%", height: "70%", objectFit: "cover", borderRadius: 16 },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    gap: 8,
  },
  signatureLine: {
    width: 100,
    borderBottomWidth: 1,
    borderColor: "#aaa",
  },
});
