"use client";

import { useEffect, useState } from "react";
import axios from "axios";
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

import { Config } from "@/lib/config";

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

const items = [
  { label: "ระดับชั้น", value: "ป.1" },
  { label: "วิชาเรียน", value: "ภาษาไทย" },
  { label: "ชื่อหน่วย", value: "วรรณกรรม" },
  { label: "จุดประสงค์", value: "เพื่ออ่านออกเสียง" },
  { label: "กิจกรรม", value: "ท่องบทความ" },
  { label: "วิธีประเมิน", value: "เสียงดังฟังชัด ไม่พูดผิด" },
];

export const DocumentPdf = () => {
  const [image, setImage] = useState();

  const fetchData = async (unitName: string) => {
    try {
      const { data } = await axios.get(Config.API_URL + "/api/images", {
        params: { query: unitName },
      });
      setImage(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData("cat");
  }, []);

  console.log("image", image);

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
          {image && (
            <View style={styles.imageContainer}>
              <Image src={image} style={styles.image} />
            </View>
          )}
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
  cell: { width: "70%", textAlign: "center" },
  imageContainer: { justifyContent: "center" },
  image: { width: "100%", height: "70%", objectFit: "cover", borderRadius: 16 },
});
