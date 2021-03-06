## Notebooks

### List All Notebooks

[**GET /notebooks.json**](https://developer.teamwork.com/notebooks#list_all_notebook)

```js
tw.notebooks.get({
	includeContent: true
})
```

### List Notebooks on a Project

[**GET /projects/{project_id}/notebooks.json**](https://developer.teamwork.com/notebooks#list_notebooks_on)

```js
tw.projects.getNotebooks(project_id, options)
```

### List Notebooks in a specific category

[**GET /notebookCategories/{id}/notebooks.json**](https://developer.teamwork.com/notebooks#list_notebooks_in)

```js
tw.notebookCategories.getNotebooks(category_id, options) 
```

### Get a Single Notebook

[**GET /notebooks/{notebook_id}.json**](https://developer.teamwork.com/notebooks#get_a_single_note)

```js
tw.notebooks.get({}, notebook_id)
```

### Create a Single Notebook

[**POST /projects/{project_id}/notebooks.json**](https://developer.teamwork.com/notebooks#create_a_single_n)

```js
tw.projects.createNotebook(project_id, {
	"notebook": {
		// --
	}
})
```

### Update a Single Notebook

[**PUT /notebooks/{notebook_id}.json**](https://developer.teamwork.com/notebooks#update_a_single_n)

```js
tw.notebooks.update(notebook_id, {
	"notebook": {
		// --
	}
})
```

### Lock a Single Notebook For Editing

[**PUT /notebooks/{id}/lock.json**](https://developer.teamwork.com/notebooks#lock_a_single_not)

```js
tw.notebooks.lock(notebook_id)
```

### Unlock a Single Notebook

[**PUT /notebooks/{id}/unlock.json**](https://developer.teamwork.com/notebooks#unlock_a_single_n)

```js
tw.notebooks.unlock(notebook_id)
```

### Delete a Single Notebook

[**DELETE /notebooks/{id}.json**](https://developer.teamwork.com/notebooks#delete_a_single_n)

```js
tw.notebooks.delete(notebook_id)
```

### Copy a Notebook to another Project

[**PUT /notebooks/{notebook_id}/copy.json**](https://developer.teamwork.com/notebooks#copy_a_notebook_t)

```js
tw.notebooks.copy(notebook_id, {
	// --
})
```

### Move a Notebook to another Project

[**PUT /notebooks/{notebook_id}/move.json**](https://developer.teamwork.com/notebooks#move_a_notebook_t)

```js
tw.notebooks.move(notebook_id, {
	// --
})
```
