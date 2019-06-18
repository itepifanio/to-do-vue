class Todo {  
  constructor(dao) {
    this.dao = dao
  }

  createTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        date text,
        kanbanid INTEGER,
        userid INTEGER,
        
        CONSTRAINT todo_fk_kanbanid FOREIGN KEY (kanbanid) REFERENCES kanbans(id) ON UPDATE CASCADE ON DELETE CASCADE,
        CONSTRAINT todo_fk_userid FOREIGN KEY (userid) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE)`;
    
    return this.dao.run(sql);
  }

  create(title, description, date, kanbanid, userid){
    return this.dao.run(
      ` INSERT INTO todos (title, description, date, kanbanid, userid) 
        VALUES (?, ?, ?, ?, ?) `,
        [title, description, date, kanbanid, userid]
    );
  }

  update(todo){
    const {id, title, description, date, kanbanid, userid} = todo;
    return this.dao.run(
      ` UPDATE todos 
      SET title = ?,
          description = ?,
          date = ?,
          kanbanid = ?
          userid = ?
      WHERE id = ?`,
      [title, description, date, kanbanid, userid, id]
    );
  }

  delete(todo_id){
    return this.dao.run(
      ` DELETE FROM todos WHERE id = ? `,
      [todo_id]
    );
  }

  getAll() {
    return this.dao.all(`SELECT * FROM todos`);
  }

  first(id) {
    return this.dao.all(
      `SELECT * FROM todos WHERE id = ? LIMIT 1`,
      [id]
    );
  }

}

module.exports = Todo;