class Kanban {  
  constructor(dao) {
    this.dao = dao;
  }

  createTable() {
    const sql = 
    ` CREATE TABLE IF NOT EXISTS kanbans (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT) `;
    return this.dao.run(sql);
  }

  create(title){
    return this.dao.run(
      ` INSERT INTO kanbans (title) 
        VALUES (?) `,
        [title]
    );
  }
}

module.exports = Kanban; 