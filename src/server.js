const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});

const db = mysql.createConnection({
  host: 'mysql-db',
  user: 'bltest',
  password: 'bltest260!',
  database: 'bltest'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Database connected');
  }
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  
    db.query(query, [username, password], (err, results) => {
      if (err) {
        res.status(500).json({ message: 'Database error' });
      } else if (results.length > 0) {
        const user = results[0];
        const userId = user.id;
        res.json({ message: 'Login successful', user: user });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    });
});

app.post('/userprofileform', (req, res) => {
  const { username, name, phoneNumber, email } = req.body;
  const query = 'UPDATE users SET Name = ?, Phone_number = ?, Email = ? WHERE username = ?;';
  const values = [name, phoneNumber, email, username];

  db.query(query, values, (error, results) => {
    if (error) {
      console.error('Error updating user data:', error);
      return res.status(500).json({ message: 'Error updating user data' });
    }

    console.log('User data updated successfully', results);
    const getUserQuery = 'SELECT * FROM users WHERE username = ?';

    db.query(getUserQuery, [username], (getUserError, userResult) => {
      if (getUserError) {
        console.error('Error retrieving user data:', getUserError);
        return res.status(500).json({ message: 'Error retrieving user data' });
      }

      if (userResult.length > 0) {
        const user = {
          username: userResult[0].username,
        };
        return res.status(200).json({ message: 'User data updated successfully', user });
      } else {
        return res.status(404).json({ message: 'User not found' });
      }
    });
  });
});

app.get('/bpage', (req, res) => {
  const { username } = req.query;
  const query = 'SELECT * FROM users where username =?;';
  const value = [username]

  db.query(query, value, (error, results) => {
    if (error) {
      console.error('Error fetching user data:', error);
      return res.status(500).json({ message: 'Error fetching user data' });
    }
    console.log(results)

    if (results.length > 0) {
      const user = results[0];
      const columnNames = Object.keys(user).filter((key) => user[key] !== null);
      return res.status(200).json({ message: 'User data retrieved successfully', user, columnNames });
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  });
});

app.post('/updateTestTable', (req, res) => {
  const { columnValue, statusValue, comments } = req.body;

  const deleteQuery = 'DELETE FROM tests WHERE BLpair = ?';
  const deleteValues = [columnValue];

  db.query(deleteQuery, deleteValues, (deleteError, deleteResults) => {
    if (deleteError) {
      console.error('Error deleting duplicate entries:', deleteError);
      return res.status(500).json({ message: 'Error deleting duplicate entries' });
} else {
  if (statusValue === 'Passed') {

    const updatePassedQuery = 'INSERT INTO tests (BLpair, Status, Comments) VALUES (?, ?, ?)';
    const updatePassedValues = [ columnValue, statusValue, ' '];
    console.log(columnValue)

    db.query(updatePassedQuery, updatePassedValues, (updateError, updateResults) => {
      if (updateError) {
        console.error('Error updating Passed:', updateError);
        return res.status(500).json({ message: 'Error updating Passed' });
      } else {
        return res.status(200).json({ message: 'Passed updated successfully' });
      }
    });
  } else if (statusValue === 'Failed') {

    const updateCommentsQuery = 'INSERT INTO tests (BLpair, Status, Comments) VALUES (?, ?, ?)';
    const updateCommentsValues = [columnValue, statusValue, comments];
    console.log(columnValue)

    db.query(updateCommentsQuery, updateCommentsValues, (updateError, updateResults) => {
      if (updateError) {
        console.error('Error updating comments:', updateError);
        return res.status(500).json({ message: 'Error updating comments' });
      } else {
        return res.status(200).json({ message: 'Comments updated successfully' });
      }
    });
  } else {
    return res.status(500).json({ message: 'Error updating comments' });
}}
});
});

app.get('/checkNameColumn', (req, res) => {
  const { username } = req.query;
  const query = 'SELECT name FROM users WHERE username = ?';

  db.query(query, [username], (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      return res.status(500).json({ error: 'Error checking the database' });
    }
    console.log('SQL Query:', query);
    console.log('Query Results:', results);
    
    const name = results.length > 0 ? results[0].name : null;
    return res.status(200).json({ name });
  });
});

app.get('/getAllTests', (req, res) => {
  const query = 'SELECT * FROM tests';

  db.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching tests data:', error);
      return res.status(500).json({ message: 'Error fetching tests data' });
    }
    res.status(200).json({ testsData: results });
  });
});


app.get('/getTestResults', (req, res) => {
  const { username } = req.query;
    const query = `
    SELECT CONCAT_WS(':', CASE
        WHEN u1.OSP_Voice IS NOT NULL AND u2.LNG IS NOT NULL THEN CONCAT(u1.username, ':OSP_Voice')
        WHEN u1.LNG IS NOT NULL AND u2.OSP_Voice IS NOT NULL THEN CONCAT(u1.username, ':LNG')
        WHEN u1.Logger IS NOT NULL AND u2.ESRP IS NOT NULL THEN CONCAT(u1.username, ':Logger')
        WHEN u1.FG IS NOT NULL AND u2.ECRF IS NOT NULL THEN CONCAT(u1.username, ':FG')
        WHEN u1.PSAP IS NOT NULL AND u2.ECRF IS NOT NULL THEN CONCAT(u1.username, ':PSAP')
        WHEN u1.ESRP IS NOT NULL AND u2.LNG IS NOT NULL THEN CONCAT(u1.username, ':ESRP')
        WHEN u1.LNG IS NOT NULL AND u2.ESRP IS NOT NULL THEN CONCAT(u1.username, ':LNG')
        WHEN u1.ESRP IS NOT NULL AND u2.OSP_Video IS NOT NULL THEN CONCAT(u1.username, ':ESRP')
        WHEN u1.OSP_Video IS NOT NULL AND u2.ESRP IS NOT NULL THEN CONCAT(u1.username, ':OSP_Video')
        WHEN u1.ECRF IS NOT NULL AND u2.ESRP IS NOT NULL THEN CONCAT(u1.username, ':ECRF')
        WHEN u1.ESRP IS NOT NULL AND u2.ECRF IS NOT NULL THEN CONCAT(u1.username, ':ESRP')
      END,
      CASE
        WHEN u1.OSP_Voice IS NOT NULL AND u2.LNG IS NOT NULL THEN CONCAT(u2.username, ':LNG')
        WHEN u1.LNG IS NOT NULL AND u2.OSP_Voice IS NOT NULL THEN CONCAT(u2.username, ':OSP_Voice')
        WHEN u1.Logger IS NOT NULL AND u2.ESRP IS NOT NULL THEN CONCAT(u2.username, ':ESRP')
        WHEN u1.FG IS NOT NULL AND u2.ECRF IS NOT NULL THEN CONCAT(u2.username, ':ECRF')
        WHEN u1.PSAP IS NOT NULL AND u2.ECRF IS NOT NULL THEN CONCAT(u2.username, ':ECRF')
        WHEN u1.ESRP IS NOT NULL AND u2.LNG IS NOT NULL THEN CONCAT(u2.username, ':LNG')
        WHEN u1.LNG IS NOT NULL AND u2.ESRP IS NOT NULL THEN CONCAT(u2.username, ':ESRP')
        WHEN u1.OSP_Video IS NOT NULL AND u2.ESRP IS NOT NULL THEN CONCAT(u2.username, ':ESRP')
        WHEN u1.ESRP IS NOT NULL AND u2.OSP_Video IS NOT NULL THEN CONCAT(u2.username, ':OSP_Video')
        WHEN u1.ECRF IS NOT NULL AND u2.ESRP IS NOT NULL THEN CONCAT(u2.username, ':ESRP')
        WHEN u1.ESRP IS NOT NULL AND u2.ECRF IS NOT NULL THEN CONCAT(u2.username, ':ECRF')
      END
    ) AS result
  FROM users u1
  JOIN users u2 ON u1.username <> u2.username
  WHERE ((u1.OSP_Voice IS NOT NULL AND u2.LNG IS NOT NULL)
    OR (u1.LNG IS NOT NULL AND u2.OSP_Voice IS NOT NULL)
    OR (u1.Logger IS NOT NULL AND u2.ESRP IS NOT NULL)
    OR (u1.FG IS NOT NULL AND u2.ECRF IS NOT NULL)
    OR (u1.PSAP IS NOT NULL AND u2.ECRF IS NOT NULL)
    OR (u1.ESRP IS NOT NULL AND u2.LNG IS NOT NULL)
    OR (u1.LNG IS NOT NULL AND u2.ESRP IS NOT NULL)
    OR (u1.ESRP IS NOT NULL AND u2.OSP_Video IS NOT NULL)
    OR (u1.OSP_Video IS NOT NULL AND u2.ESRP IS NOT NULL)
    OR (u1.ECRF IS NOT NULL AND u2.ESRP IS NOT NULL)
    OR (u1.ESRP IS NOT NULL AND u2.ECRF IS NOT NULL))
    AND (u1.username = ? OR u2.username = ?)
  
  UNION
  
  SELECT
    CONCAT_WS(':',
      CASE
        WHEN u1.OSP_RTT IS NOT NULL AND u2.ESRP IS NOT NULL THEN CONCAT(u1.username, ':OSP_RTT')
        WHEN u1.ESRP IS NOT NULL AND u2.OSP_RTT IS NOT NULL THEN CONCAT(u1.username, ':ESRP')
        WHEN u1.OSP_RTT IS NOT NULL AND u2.LNG IS NOT NULL THEN CONCAT(u1.username, ':OSP_RTT')
        WHEN u1.LNG IS NOT NULL AND u2.OSP_RTT IS NOT NULL THEN CONCAT(u1.username, ':LNG')
      END,
      CASE
        WHEN u1.OSP_RTT IS NOT NULL AND u2.ESRP IS NOT NULL THEN CONCAT(u2.username, ':ESRP')
        WHEN u1.ESRP IS NOT NULL AND u2.OSP_RTT IS NOT NULL THEN CONCAT(u2.username, ':OSP_RTT')
        WHEN u1.OSP_RTT IS NOT NULL AND u2.LNG IS NOT NULL THEN CONCAT(u2.username, ':LNG')
        WHEN u1.LNG IS NOT NULL AND u2.OSP_RTT IS NOT NULL THEN CONCAT(u2.username, ':OSP_RTT')
      END
    ) AS result
  FROM users u1
  JOIN users u2 ON u1.username <> u2.username
  WHERE ((u1.OSP_RTT IS NOT NULL AND u2.ESRP IS NOT NULL)
    OR (u1.ESRP IS NOT NULL AND u2.OSP_RTT IS NOT NULL)
    OR (u1.OSP_RTT IS NOT NULL AND u2.LNG IS NOT NULL)
    OR (u1.LNG IS NOT NULL AND u2.OSP_RTT IS NOT NULL))
    AND (u1.username = ? OR u2.username = ?)
    
  union
  
  SELECT
    CONCAT_WS(':',
      CASE
        WHEN u1.OSP_Video IS NOT NULL AND u2.ESRP IS NOT NULL THEN CONCAT(u1.username, ':OSP_Video')
        WHEN u1.ESRP IS NOT NULL AND u2.OSP_Video IS NOT NULL THEN CONCAT(u1.username, ':ESRP')
        WHEN u1.OSP_Video IS NOT NULL AND u2.LNG IS NOT NULL THEN CONCAT(u1.username, ':OSP_Video')
        WHEN u1.LNG IS NOT NULL AND u2.OSP_Video IS NOT NULL THEN CONCAT(u1.username, ':LNG')
      END,
      CASE
        WHEN u1.OSP_Video IS NOT NULL AND u2.ESRP IS NOT NULL THEN CONCAT(u2.username, ':ESRP')
        WHEN u1.ESRP IS NOT NULL AND u2.OSP_Video IS NOT NULL THEN CONCAT(u2.username, ':OSP_Video')
        WHEN u1.OSP_Video IS NOT NULL AND u2.LNG IS NOT NULL THEN CONCAT(u2.username, ':LNG')
        WHEN u1.LNG IS NOT NULL AND u2.OSP_Video IS NOT NULL THEN CONCAT(u2.username, ':OSP_Video')
      END
    ) AS result
  FROM users u1
  JOIN users u2 ON u1.username <> u2.username
  WHERE ((u1.OSP_Video IS NOT NULL AND u2.ESRP IS NOT NULL)
    OR (u1.ESRP IS NOT NULL AND u2.OSP_Video IS NOT NULL)
    OR (u1.OSP_Video IS NOT NULL AND u2.LNG IS NOT NULL)
    OR (u1.LNG IS NOT NULL AND u2.OSP_Video IS NOT NULL))
    AND (u1.username = ? OR u2.username = ?);
    `;

  const values = [username, username,username, username,username, username];
  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const testResults = result.map((row) => row.result);
    console.log(username);
    console.log(testResults);
    return res.status(200).json({ results: testResults });
  });
  });

app.get('/getFailedTests', (req, res) => {
    const query = 'SELECT * FROM tests where username = ?';
    const value = [username]
  
    db.query(query, value,(error, results) => {
      if (error) {
        console.error('Error fetching tests data:', error);
        return res.status(500).json({ message: 'Error fetching tests data' });
      }
      res.status(200).json({ testsData: results });
    });
  });

  app.get('/api/tooling-data', (req, res) => {
    const query = 'SELECT * FROM ToolingData WHERE Test_Scenario_1 IS NULL OR Test_Scenario_2 IS NULL OR Test_Scenario_3 IS NULL OR Test_Scenario_4 IS NULL OR Test_Scenario_5 IS NULL OR Test_Scenario_6 IS NULL';
  
    db.query(query, (error, results) => {
      if (error) {
        console.error('Error fetching tooling data:', error);
        return res.status(500).json({ message: 'Error fetching tooling data' });
      }
      res.status(200).json({ toolingData: results });
    });
  });

  app.post('/submitTestResult', (req, res) => {
    const { testID, Test_Scenario_1, Test_Scenario_2, Test_Scenario_3, Test_Scenario_4, Test_Scenario_5, Test_Scenario_6, notes } = req.body;
    const updateQuery = 'UPDATE ToolingData SET Test_Scenario_1 = ?, Test_Scenario_2 = ?, Test_Scenario_3 = ?, Test_Scenario_4 = ?,Test_Scenario_5 = ?,Test_Scenario_6 = ?, Notes = ? WHERE ID = ?';
    const updateValues = [Test_Scenario_1, Test_Scenario_2, Test_Scenario_3, Test_Scenario_4, Test_Scenario_5, Test_Scenario_6, notes, testID];
    db.query(updateQuery, updateValues, (error, results) => {
      if (error) {
        console.error('Error updating test record:', error);
        return res.status(500).json({ message: 'Error updating test record' });
      }
      res.status(200).json({ message: 'Test record updated successfully' });
    });
  });

  app.get('/api/failed-test-cases', (req, res) => {
    const Query = 'SELECT * from ToolingData where Test_Scenario_1 = 0 OR Test_Scenario_2 = 0 OR Test_Scenario_3 = 0 OR Test_Scenario_4 = 0 OR Test_Scenario_5 = 0 OR Test_Scenario_6 = 0';
    db.query(Query, (error, results) => {
      if (error) {
        console.error('Error updating test record:', error);
        return res.status(500).json({ message: 'Error updating test record' });
      }
      res.status(200).json({ failedTestCases: results});
    });
  });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

