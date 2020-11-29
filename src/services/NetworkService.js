import Avatar from "../icons/Avatar.svg";

export class NetworkService {
  getPost() {
    return [
      {
        id: 1,
        avatar: Avatar,
        author: "Mark Twain",
        postText:
          "The first half of life consists of the capacity to enjoy without the chance, the last half consists of the chance without the capacity.",
      },
      {
        id: 2,
        avatar: Avatar,
        author: "Mark Zuckerberg",
        postText:
          "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks. ",
      },
      {
        id: 3,
        avatar: Avatar,
        author: "John Lennon",
        postText:
          "When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps.",
      },
      {
        id: 4,
        avatar: Avatar,
        author: "Bo Bennet",
        postText:
          "Avoiding the phrase 'I don't have time...', will soon help you to realize that you do have the time needed for just about anything you choose to accomplish in life.",
      },
      {
        id: 5,
        avatar: Avatar,
        author: "Seneca",
        postText: "While we are postponing, life speeds by.",
      },
      {
        id: 6,
        avatar: Avatar,
        author: "Benjamin Franklin",
        postText: "An investment in knowledge always pays the best interest.",
      },
    ];
  }
}
