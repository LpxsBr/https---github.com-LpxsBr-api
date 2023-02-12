# API WITH NODE JS

---

## POST - Add User

Route: ``` host/users/add ```

#### Body example

```
{
    "username": "sample user",
    "email": "user@sample.com",
    "password": "password@sample#123"
}

```
### Post - Auth user

``` host/users/auth ```


#### Body example

```
{
    "email": "user@sample.com",
    "password": "password@sample#123"
}

```

#### Returns
##### if login is true

```
{
    "msg": "logged",
    "id": 1
}
```
##### if login is false

```
{
    "msg": "not logged",
}
```


---

## GET - List Users

``` host/ ``` or ``` host/{name}```

return welcome messages

### Get Users

#### Get All Users

``` host/users/list ```

#### Get an user by id

``` host/user/{id} ```

-----

Client API was make in React Js using Axios
You can access [here](https://github.com/LpxsBr/FRONT-FOR-LpxsBr-https---github.com-LpxsBr-api)