// // component import
// import ExpenseItem from "./ExpenseItem";

// const Table = ({ expenses, showBudget = true }) => {
//   return (
//     <div className="table">
//       <table>
//         <thead>
//           <tr>
//             {["Name", "Amount", "Date", showBudget ? "Budget" : "", ""].map(
//               (i, index) => (
//                 <th key={index}>{i}</th>
//               )
//             )}
//           </tr>
//         </thead>
//         <tbody>
//           {expenses.map((expense) => (
//             <tr key={expense.id}>
//               <ExpenseItem expense={expense} showBudget={showBudget} />
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// export default Table;


import React from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import ExpenseItem from "./ExpenseItem";

// Define styles for PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    
    flexGrow: 1
  }
});

const Table = ({ expenses, showBudget = true }) => {
  // Function to render PDF content
  const BudgetPDF = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {expenses.map((expense) => (
            <Text key={expense.id}>{`${expense.name}: $${expense.amount}`}</Text>
          ))}
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {["Name", "Amount", "Date", showBudget ? "Budget" : "", ""].map(
              (i, index) => (
                <th key={index}>{i}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <ExpenseItem expense={expense} showBudget={showBudget} />
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Button to download PDF */}
      <PDFDownloadLink document={<BudgetPDF />} fileName="budget.pdf" className="btn">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink>
    </div>
  );
};
export default Table;
