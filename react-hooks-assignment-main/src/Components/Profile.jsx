import React from 'react'

export const Profile = ({username, token}) => {
  const [profile, setProfile] = React.useState({})
  React.useEffect(() => {
    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then((res) => res.json())
    .then((res) => setProfile(res))
    .catch((err) => console.log(err))
  }, [])

  return (
    <div>
        <h1>Profile Details</h1>
        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
        <p>Username: {profile.username}</p>
        <p>Mobile: {profile.mobile}</p>
        <p>Description: {profile.description}</p>
    </div>
  )
}
