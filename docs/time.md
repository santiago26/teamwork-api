## Time Tracking

[**POST /tasks/{taskid}/time_entries.json**](https://developer.teamwork.com/timetracking#create_a_time-ent)

```js
tw.tasks.createTime(task_id, {
	"time-entry": {
		// --
	}
})
```

[**GET /tasklists/{id}/time/total.json**](https://developer.teamwork.com/timetracking#time_totals)

```js
tw.tasklists.totalTime(tasklist_id, {
	userId: 0,
	fromDate: '',
	toDate: '',
	fromTime: '',
	toTime: '',
	projectType: 'active'
})
```

[**GET /tasks/{id}/time/total.json**](https://developer.teamwork.com/timetracking#time_totals)

```js
tw.tasks.totalTime(task_id, {
	userId: 0,
	fromDate: '',
	toDate: '',
	fromTime: '',
	toTime: '',
	projectType: 'active'
})
```

[**PUT tasks/{task_id}/estimatedtime.json**](https://developer.teamwork.com/timetracking#add_a_time_estima)

```js
tw.tasks.estimatedTime(task_id, {
	// --
})
```

[**GET /time_entries.json**](https://developer.teamwork.com/timetracking#retrieve_all_time)

```js
tw.time.get({
	page: 1,
	pageSize: 500,
	fromDate: '',
	fromTime: '',
	toDate: '',
	toTime: '',
	sortBy: 'task',
	sortOrder: 'ASC',
	userId: 0,
	billableType: 'billable',
	invoicedType: 'invoiced',
	projectStatus: 'active',
	showDeleted: 'true',
	tagIds: "1,2,3"
})
```

[**GET /time_entries/{id}.json**](https://developer.teamwork.com/timetracking#retrieve_single_t)

```js
tw.time.get({}, time_id)
```

[**PUT /time_entries/{id}.json**]()

```js
tw.time.update(time_id, {
	"time-entry": {
		// --
	}
})
```

[**DELETE /time_entries/{id}.json**](https://developer.teamwork.com/timetracking#delete_a_time-ent)

```js
tw.time.delete(time_id)
```

[**GET /projects/{project_id}/time_entries.json**](https://developer.teamwork.com/timetracking#retrieve_all_time)

```js
tw.projects.getTime(project_id, {
	userId: 0,
	fromDate: '',
	toDate: '',
	fromTime: '',
	toTime: '',
	projectType: 'active'
})
```

[**GET /todo_items/{todo_item_id}/time_entries.json**](https://developer.teamwork.com/timetracking#retrieve_all_to-d)

```js
tw.time.todos(todo_id)
```

[**POST /projects/{project_id}/time_entries.json**](https://developer.teamwork.com/timetracking#create_a_time-ent)

```js
tw.projects.createTime(project_id, {
	"time-entry": {
		// --
	}
})
```

[**GET /time/total.json**](https://developer.teamwork.com/timetracking#time_totals)

```js
tw.time.total({
	userId: 0,
	fromDate: '',
	toDate: '',
	fromTime: '',
	toTime: '',
	projectType: 'active'
})
```

[**GET /projects/{id}/time/total.json**](https://developer.teamwork.com/timetracking#time_totals)

```js
tw.projects.totalTime({
	userId: 0,
	fromDate: '',
	toDate: '',
	fromTime: '',
	toTime: '',
	projectType: 'active'
}, project_id)
```

[**GET /projects/time/total.json**](https://developer.teamwork.com/timetracking#time_totals_per_p)

```js
tw.projects.totalTime({
	fromDate: '',
	toDate: '',
	fromTime: '',
	toTime: '',
	projectType: 'active',
	page: 1,
	pageSize: 100
})
```

[**GET to /people/{person_id}/loggedtime.json**](https://developer.teamwork.com/timetracking#logged_time)

```js
tw.people.loggedTime(person_id, {
	m: 1,
	y: '2001',
	projectId: 1234,
	page: 1,
	pageSize: 50
})
```