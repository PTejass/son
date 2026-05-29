const { MongoClient, ObjectId } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'College';

// Create a new MongoClient
const client = new MongoClient(url);

// Connect to the MongoDB server
async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

// Insert operation (Create)
async function insertStudent(student) {
    const db = client.db(dbName);

    try {
        const result = await db.collection('student').insertOne(student);

        console.log(`Student with id ${result.insertedId} inserted successfully`);

    } catch (err) {
        console.error('Error inserting student:', err);
    }
}

// Update operation
async function updateStudent() {
    const db = client.db(dbName);

    try {

        // Give ObjectId here
        const result = await db.collection('student').updateOne(
            { _id: new ObjectId('69feb43b2541fb5daaabc117') },
            { $set: { Dept: "CSE" } }
        );

        console.log('Student data updated successfully');

    } catch (err) {
        console.error('Error updating student:', err);
    }
}

// Find all students
async function findAllStudents() {
    const db = client.db(dbName);

    try {

        const students = await db.collection('student').find({}).toArray();

        console.log('All students:', students);

    } catch (err) {
        console.error('Error finding students:', err);
    }
}

// Delete operation
async function deleteStudent(Id) {
    const db = client.db(dbName);

    try {

        const result = await db.collection('student').deleteOne(
            { _id: new ObjectId(Id) }
        );

        console.log(`Student with id ${Id} deleted successfully`);

    } catch (err) {
        console.error('Error deleting student:', err);
    }
}

// Perform operations
connectDB()
.then(async () => {

    // Insert a student
    const exampleStudent = {
        name: 'Monisha',
        age: 18,
        cgpa: 6.38,
        Dept: "CSE"
    };

    await insertStudent(exampleStudent);

    // Find all students
    await findAllStudents();

    // Update a student
    await updateStudent();

    // Delete a student
    // Give ObjectId here
    const studentIdToDelete = '6a009d3c68fd89136bfe0796';

    await deleteStudent(studentIdToDelete);

    // Close the connection
    client.close();

});
