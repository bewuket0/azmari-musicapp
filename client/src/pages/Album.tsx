import styled from "@emotion/styled";
import HeaderComponent from "../components/HeaderComponent";
import AlbumComponent from "../components/AlbumComponent";

const albumsList = [
  {
    album: "tizita",
    artist: "Mohammed Ahmed",
    releasedDate: "jan 03, 1984",
    totalTrack: 14,
    albumImage:
      "https://www.songlines.co.uk/media/3464/mahmoud-ahmed-ethiopiques-7-ere-mela-mela-cover.jpg?width=280",
  },
  {
    album: "one ethiopia",
    artist: "GIGI",
    releasedDate: "jan 03, 1997",
    totalTrack: 13,
    albumImage:
      "https://p16-tm-sg.tiktokmusic.me/img/tos-alisg-i-0000/d966e51b8df34164933c1363831e657b~c5_500x500.image",
  },
  {
    album: "Ayderegim",
    artist: "Madingo Afework",
    releasedDate: "sep 12, 2004",
    totalTrack: 12,
    albumImage:
      "https://lastfm.freetls.fastly.net/i/u/500x500/60a3baaccec80abae773804bdc20bb5d.jpg",
  },
  {
    album: "six 6",
    artist: "Rophnan",
    releasedDate: "jan 03, 2023",
    totalTrack: 13,
    albumImage:
      "https://www.okayafrica.com/media-library/rophnan-sidist.jpg?id=30180718&width=1245&height=700&quality=85&coordinates=0%2C437%2C0%2C437",
  },
  {
    album: "asalafi",
    artist: "Wegdayt",
    releasedDate: "Aug 03, 2023",
    totalTrack: 13,
    albumImage:
      "https://i0.wp.com/www.capitalethiopia.com/wp-content/uploads/2023/05/Art-B.jpg?fit=899%2C599&ssl=1",
  },
];

const Box = styled.div`
  padding: 10px;
  width: 100%;
`;
const Header = styled.div`
  text-align: center;
  padding-top: 6%;
`;
const H1 = styled.div`
  font-size: 4.6rem;
  color: #d27e4e;
`;
const H2 = styled.div`
  font-size: 1.6rem;
  color: #fff;
`;
const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 20px;
  gap: 50px;
  flex-wrap: wrap;
`;

const Album = () => {
  return (
    <Box>
      {/* <HeaderComponent backgroundImage="y-peyankov-ge256Z4s_jk-unsplash.jpg"> */}
      <HeaderComponent backgroundImage="natalie-cardona-W8BRzoUTHNA-unsplash.jpg">
        <Header>
          <H1>Albums</H1>
          <H2>Total of x Albums</H2>
        </Header>
      </HeaderComponent>
      <ContentBox>
        {albumsList.map((album, index) => (
          <AlbumComponent
            key={index}
            album={album.album}
            artist={album.artist}
            albumImage={album.albumImage}
            totalTrack={album.totalTrack}
            releasedDate={album.releasedDate}
          />
        ))}
      </ContentBox>
    </Box>
  );
};

export default Album;
