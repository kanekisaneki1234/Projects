// namespace Tutorial
// {
//     class Movies
//     {
//         public string movieName;
//         public string director;
//         private string rating;

//         public Movies(string MovieName, string Director, string iRating)
//         {
//             movieName = MovieName;
//             director = Director;
//             Rating = iRating; // This makes sure that the user cannot set an invalid entry even through the object creation by passing in invalid rating. So this calls the setter at the assignment of rating itself.
//             // rating = iRating;
//             Console.WriteLine("Movie entry created.");
//         }

//         public string Rating
//         {
//             get 
//             { return rating; }
//             set
//             { 
//                 string[] array = { "A", "UA", "PG", "G", "R", "NR", "E"};
//                 bool containsElement = array.Contains(value);
//                 if (containsElement)
//                 {
//                     rating = value;
//                 }
//                 else
//                 {
//                     rating = "NR";
//                 }
//             }
//         }
//     }
// }