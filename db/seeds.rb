# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
movies = Movie.create([
    {
        name: "Bag It",
        average_rating: 4.6,
        release_year: 2010,
        url: "http://www.netflix.com/Movie/Bag_It/70153545",
        rating: "NR"
    },
    {
        name: "Lost Boy: The Next Chapter",
        average_rating: 4.6,
        release_year: 2009,
        url: "http://www.netflix.com/Movie/Lost_Boy_The_Next_Chapter/70171826",
        rating: "NR"
    },
    {
        name: "To Live & Ride in L.A.",
        average_rating: 4.6,
        release_year: 2010,
        url: "http://www.netflix.com/Movie/To_Live_Ride_in_L.A./70175120",
        rating: "NR"
    },
    {
        name: "K-ON!: Vol. 1",
        average_rating: 4.6,
        release_year: 2009,
        url: "http://www.netflix.com/Movie/K-ON_Vol._1/70207355",
        rating: "NR"
    },
    {
        name: "Archer: Season 2: Disc 1",
        average_rating: 4.6,
        release_year: 2011,
        url: "http://www.netflix.com/Movie/Archer_Season_2_Disc_1/70217944",
        rating: "TV-MA"
    },
    {
        name: "Archer: Season 2: Disc 2",
        average_rating: 4.6,
        release_year: 2011,
        url: "http://www.netflix.com/Movie/Archer_Season_2_Disc_2/70217945",
        rating: "TV-MA"
    },
    {
        name: "Big Time Rush: Season 1: Vol. 2",
        average_rating: 4.6,
        release_year: 2009,
        url: "http://www.netflix.com/Movie/Big_Time_Rush_Season_1_Vol._2/70171491",
        rating: "NR"
    },
    {
        name: "Taylor Swift: Taylor Swift",
        average_rating: 4.5,
        release_year: 2007,
        url: "http://www.netflix.com/Movie/Taylor_Swift_Taylor_Swift/70085495",
        rating: "NR"
    },
    {
        name: "Hopkins 24/7: Season 2",
        average_rating: 4.5,
        release_year: 2008,
        url: "http://www.netflix.com/Movie/Hopkins_24_7_Season_2/70100701",
        rating: "NR"
    },
    {
        name: "The Shawshank Redemption",
        average_rating: 4.5,
        release_year: 1994,
        url: "http://www.netflix.com/Movie/The_Shawshank_Redemption/70005379",
        rating: "R"
    }
])