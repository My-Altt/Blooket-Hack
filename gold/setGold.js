javascript:(function()%7B(async%20()%20%3D%3E%20%7B%0A%20%20%20%20let%20n%20%3D%20document.createElement('iframe')%3B%0A%20%20%20%20document.body.append(n)%3B%0A%20%20%20%20window.alert%20%3D%20n.contentWindow.alert.bind(window)%3B%0A%20%20%20%20window.prompt%20%3D%20n.contentWindow.prompt.bind(window)%3B%0A%20%20%20%20window.confirm%20%3D%20n.contentWindow.confirm.bind(window)%3B%0A%20%20%20%20n.remove()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20function%20reactHandler()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20Object.values(document.querySelector('%23app%20%3E%20div%20%3E%20div'))%5B1%5D.children%5B1%5D._owner%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(window.location.pathname%20!%3D%20'%2Fplay%2Fgold')%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert('You%20must%20be%20in%20a%20gold%20quest%20game!')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20gold%20%3D%20Number(parseFloat(prompt('How%20much%20gold%20do%20you%20want%3F')))%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20reactHandler().stateNode.setState(%7B%20gold2%3A%20gold%2C%20gold%20%7D)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert('Gold%20added!')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%7D)()%3B%7D)()%3B
