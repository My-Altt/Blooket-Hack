javascript:(function()%7B(async%20()%20%3D%3E%20%7B%0A%20%20%20%20let%20n%20%3D%20document.createElement('iframe')%3B%0A%20%20%20%20document.body.append(n)%3B%0A%20%20%20%20window.alert%20%3D%20n.contentWindow.alert.bind(window)%3B%0A%20%20%20%20window.prompt%20%3D%20n.contentWindow.prompt.bind(window)%3B%0A%20%20%20%20window.confirm%20%3D%20n.contentWindow.confirm.bind(window)%3B%0A%20%20%20%20n.remove()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20function%20reactHandler()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20Object.values(document.querySelector('%23app%20%3E%20div%20%3E%20div'))%5B1%5D.children%5B1%5D._owner%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(window.location.pathname%20%3D%3D%20'%2Ftower%2Fbattle'%20%7C%7C%20window.location.pathname%20%3D%3D%20'%2Ftower%2Fstart')%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20data%20%3D%20reactHandler().stateNode.state%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(data.phase%20!%3D%20'select')%20return%20alert('You%20must%20use%20this%20hack%20while%20you%20are%20starting%20a%20match%20or%20in%20one!')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20reactHandler().stateNode.setState(%7B%20myCard%3A%20%7B%20...data.myCard%2C%20strength%3A%20100%2C%20charisma%3A%20100%2C%20wisdom%3A%20100%20%7D%20%7D)%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert('Done!')%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert('You%20must%20be%20in%20a%20Tower%20of%20Doom%20game!')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%7D)()%3B%7D)()%3B
