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
        CONSTRAINT todo_fk_kanbanid FOREIGN KEY (kanbanid)
          REFERENCES kanbans(id) ON UPDATE CASCADE ON DELETE CASCADE)`;
    
    return this.dao.run(sql);
  }

  create(title, description, date, kanbanid){
    return this.dao.run(
      ` INSERT INTO todos (title, description, date, kanbanid) 
        VALUES (?, ?, ?, ?) `,
        [title, description, date, kanbanid]
    );
  }

  update(todo){
    const {id, title, description, date, kanbanid} = todo;

    return this.dao.run(
      ` UPDATE todos 
      SET title = ?,
          description = ?,
          date = ?,
          kanbanid = ?
      WHERE id = ?`,
      [title, description, date, kanbanid, id]
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

}

module.exports = Todo;