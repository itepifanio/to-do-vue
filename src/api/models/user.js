class User {  
  constructor(dao) {
    this.dao = dao;
  }

  createTable() {
    const sql = 
    ` CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      password TEXT) `;
    return this.dao.run(sql);
  }

  create(name, email, password){
    return this.dao.run(
      ` INSERT INTO users (name, email, password) 
        VALUES (?,?,?) `,
        [name, email, password]
    );
  }

  getUser(email){
    return this.dao.all(
      ` SELECT * FROM users WHERE email = ?`, [email]
    );
  }
}

module.exports = User; 