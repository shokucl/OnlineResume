import { Page, Text, View, Document, StyleSheet, Image, Link } from '@react-pdf/renderer';
//import MainPicture from '../../assets/fotopacuandotenga';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row'
  },
  sidebar: {
    padding: 10,
    display: "inline-block",
    backgroundColor: "#436696",
    opacity: 0.2,
    width: 200
  },
  sidebarContent: {
    opacity: 1
  },
  section2: {
    padding: 10,
    opacity: 1,
    display: "inline-block",
  },
  mainPicture: {
    maxHeight: 90,
  },
  links: {
    textDecoration: 'none',
    color: 'black'
  },
  contentTitle: {
    backgroundColor: "#436696"
  }
});

// Create Document Component
const PDFResume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.sidebar}>
        <View style={styles.sidebarContent}>
          {/* <Image src={MainPicture} style={styles.mainPicture} /> */}
          <Link style={styles.links} src="tel:+56986030209">+56 9 8603 0209</Link>
          <Link style={styles.links} src="mailto:sergioluisleon.d.v@gmail.com">sergioluisleon.d.v@gmail.com</Link>
          <Text>Ñuñoa, Región Metropolitana.</Text>
          <Link style={styles.links} src="https://www.linkedin.com/in/sergioduranv/">Sergio Durán</Link>
        </View>
      </View>
      <View style={styles.contentTitle}>
        <Text>Section #1</Text>
      </View>
    </Page>
  </Document>
);


export default PDFResume;