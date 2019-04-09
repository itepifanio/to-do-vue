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

  create(title, description, date){
    return this.dao.run(
      ` INSERT INTO todos (title, description, date) 
        VALUES (?, ?, ?) `,
        [title, description, date]
    );
  }

  update(todo){
    const {id, title, description, date} = todo;

    return this.dao.run(
      ` UPDATE todos 
      SET title = ?,
          description = ?,
          date = ? 
      WHERE id = ?`,
      [title, description, date, id]
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
