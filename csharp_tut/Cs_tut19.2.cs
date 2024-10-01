/* namespace Tutorial
{
    class Song
    {
        public string songName;
        public string genre;
        public string artist;
        static public int songCount = 0;
        public int id;

        public Song(string SongName, string Genre, string Artist)
        {
            songName = SongName;
            genre = Genre;
            artist = Artist;
            Console.WriteLine("Song added.");
            songCount++;
            id = songCount;
        }

        public int getCount()
        {
            return songCount;
        }
    }
} */