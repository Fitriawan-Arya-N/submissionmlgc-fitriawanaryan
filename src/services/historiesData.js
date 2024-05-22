const { Firestore } = require('@google-cloud/firestore');

async function getPredicthistoriesData() {
    const db = new Firestore({ databaseId: "(default)" });
  
    const prediction = db.collection("prediction");
    const myhistory = await prediction.get();
    const data = [];
    myhistory.forEach((doc) => {
        const dataDocument = doc.data();
        const historiesContent = {
          id: dataDocument.id,
          history: {
            result: dataDocument.result,
            createdAt: dataDocument.createdAt,
            suggestion: dataDocument.suggestion,
            id: dataDocument.id,
          },
        };
        data.push(historiesContent);
      });
      return data;
    }
  
module.exports = getPredicthistoriesData;