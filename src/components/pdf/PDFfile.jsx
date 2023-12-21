import { Document, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 20,
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    borderBottom: "2px solid #333",
    paddingBottom: 10,
    color: "#333",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: "auto",
    width: "50%",
  },
  info: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
    color: "#555",
  },
  date: {
    fontSize: 14,
    marginBottom: 10,
    color: "#555",
    textAlign: "center",
  },
  footer: {
    marginTop: 40,
    textAlign: "center",
    color: "#777",
    fontSize: 12,
  },
});

export default function PDFfile({apartment , date}) {

    console.log(apartment);
    console.log(date);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString("fr-FR", {
          day: "numeric",
          month: "numeric",
          year: "2-digit",
          hour: "numeric",
          minute: "numeric",
        });
      };
    console.log(date);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>   
          <Text style={styles.title}>DigiSyndic Facture</Text>
          <Text style={styles.info}>Owner: {apartment?.firstNameOwner} {apartment?.lastNameOwner}</Text>
          <Text style={styles.info}>CIN: {apartment?.cin}</Text>
          <Text style={styles.info}>Number of Apartment: {apartment?.numberApart}</Text>
          <Text style={styles.info}>Floor: {apartment?.floor}</Text>
          <Text style={styles.info}>Phone: {apartment?.phone}</Text>
          <Text style={styles.date}>Date Created apartment: {formatDate(apartment?.createdAt)}</Text>
          <Text style={styles.date}>Date Payment Facture: {formatDate(date)}</Text>
          <Text style={styles.date}>Date Generate Facture: {formatDate(Date.now())}</Text>
          <Text style={styles.footer}>Thank you for choosing DigiSyndic</Text>
        </View>
      </Page>
    </Document>
  );
}
