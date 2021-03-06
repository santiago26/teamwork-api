## Permissions

### Add a new user to a project

[**POST /projects/{id}/people/{id}.json**](https://developer.teamwork.com/permissions#add_a_new_user_to)

```js
tw.projects.addPeople(project_id, person_id)
```

### Add/Remove multiple people to/from a project

[**PUT /projects/{id}/people.json**](https://developer.teamwork.com/permissions#add/remove_multip)

```js
tw.projects.people(project_id, {
	"add": {
		// --
	},
	"remove": {
		// --
	}
})
```

### Remove a user from a project

[**DELETE /projects/{id}/people/{id}.json**](https://developer.teamwork.com/permissions#remove_a_user_fro)

```js
tw.projects.removePeople(project_id, person_id)
```

### Get a users permissions on a project

[**GET /projects/{id}/people/{id}.json**](https://developer.teamwork.com/permissions#get_a_users_permi)

```js
tw.projects.getPermissions(project_id, person_id)
```

### Update a users permissions on a project

[**PUT /projects/{id}/people/{id}.json**](https://developer.teamwork.com/permissions#update_a_users_pe)

```js
tw.projects.updatePermissions(project_id, person_id, {
	"permissions": {
		// --
	}
})
```
