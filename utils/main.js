import { Client, Storage, ID, Databases, Query, Account } from "appwrite";

const account = new Account(Client);

const promise = account.get();

promise.then(function (response) {
  console.log(response); // Success - user is authenticated
}).catch(function (error) {
  console.log(error); // Failure - user is not authenticated
  router.push('/login'); // Redirect the user to the login page
});

export default {
  methods: {
    async uploadFile(event) {
        const client = new Client();

        client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('65240964460e540800cb');
      const storage = new Storage(client);

      const file = event.target.files[0];
      const promise = storage.createFile(
        '65232dc25bf33138eca5',
        ID.unique(),
        file
      );

      promise.then(function (response) {
        console.log(response); // Success

        const databases = new Databases(client);

        let promise = databases.listDocuments(
            "6523fbf857f25d8614dc",
            "6523fbfdc1e9b05422e7",
            [
                Query.equal('id', response.$id)
            ]
        );
      }).catch(function (error) {
        console.log(error); // Failure
      });
    },
  },
};