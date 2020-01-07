const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			loadContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/timothy_agenda")
					.then(response => response.json())
					.then(data => {
						setStore({ contacts: data });
					});
			},
			addcontact: []
		}
	};
};

export default getState;
