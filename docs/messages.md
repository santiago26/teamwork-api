## Messages

[**POST /projects/{project_id}/posts.json**](https://developer.teamwork.com/messages#create_a_message)

```js
tw.projects.createMessage(project_id, {
	"post": {
		// --
	}
})
```

[**GET /posts/{id}.json**](https://developer.teamwork.com/messages#retrieve_a_single)

```js
tw.messages.get(message_id)
```

[**GET /projects/{project_id}/posts.json**](https://developer.teamwork.com/messages#retrieve_latest_m)

```js
tw.projects.getMessages(project_id, false)
```

[**GET /projects/{project_id}/cat/{category_id}/posts.json**](https://developer.teamwork.com/messages#retrieve_messages)

```js
tw.projects.getCategoryMessages(project_id, category_id, false)
```

[**PUT /posts/{id}.json**](https://developer.teamwork.com/messages#update_message)

```js
tw.messages.update(message_id, {
	"post": {
		// --
	}
})
```

[**GET /projects/{project_id}/posts/archive.json**](https://developer.teamwork.com/messages#get_archived_mess)

```js
tw.projects.getMessages(project_id, true)
```

[**GET /projects/{project_id}/cat/{category_id}/posts/archive.json**](https://developer.teamwork.com/messages#get_archived_mess)

```js
tw.projects.getCategoryMessages(project_id, category_id, true)
```

[**PUT /messages/{id}/archive.json**](https://developer.teamwork.com/messages#archive_a_message)

```js
tw.messages.archive(message_id)
```

[**PUT /messages/{id}/unarchive.json**](https://developer.teamwork.com/messages#un-archive_a_mess)

```js
tw.messages.unArchive(message_id)
```

[**DELETE /posts/{id}.json**](https://developer.teamwork.com/messages#destroy_message)

```js
tw.messages.delete(message_id)
```

[**PUT /messages/{id}/markread.json**](https://developer.teamwork.com/messages#mark_message_read)

```js
tw.messages.read(message_id)
```