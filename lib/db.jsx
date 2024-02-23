import { connect, connection } from 'mongoose';

const connectionStatus = {
   isConnected: false,
};

export async function connectionDB() {
   if (connectionStatus.isConnected) {
      return;
   }
   const db = await connect(process.env.MONGO_URI);
   console.log(db.connection.name);
   connectionStatus.isConnected = db.connections[0].readyState;
}

connection.on('connected', () => {
   console.log('Database connected');
});

connection.on('error', (error) => {
   console.log('Error in database connection');
   console.log(error);
});
