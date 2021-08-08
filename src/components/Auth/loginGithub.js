const logInGithub = async () => {
  let timer = null;
  const logInUrl = 'http://localhost:8000/login/github';
  const newWindow = window.open(logInUrl, '_blank', 'width=500px,height=500px');
  if (newWindow) {
    timer = setInterval(() => {
      if (newWindow.closed) {
        // check the user is valid
        const user = fetchUser();
        setUser(user);
        if (timer) clearInterval(timer);
      }
    }, 500);
  }
};

const fetchUser = async () => {
  const user = await axios.get('http://localhost:8000/checkvaliduser', {
    withCredentials: true,
  });
  console.log(user.data);
  return user.data;
};
