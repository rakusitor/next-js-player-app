import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { artistsData } from "./songsData";

const prisma = new PrismaClient();

const run = async () => {
  const salt = bcrypt.genSaltSync();
  const user = await prisma.user.upsert({
    where: { email: "user@test.com" },
    update: {},
    create: {
      firstName: "Rahul",
      lastName: "Singh",
      email: "rahul@test.com",
      password: bcrypt.hashSync("passowrd", salt),
    },
  });

  const artistsSeed = artistsData.map(async (artist) => {
    return prisma.artist.upsert({
      where: { name: artist.name },
      update: {},
      create: {
        name: artist.name,
        songs: {
          create: artist.songs.map((song) => ({
            name: song.name,
            duration: song.duration,
            url: song.url,
          })),
        },
      },
    });
  });

  try {
    await Promise.all(artistsSeed).then((values) => {
      console.log("artists: ", values);
    });
  } catch (e) {
    console.log(e);
  }

  const songs = await prisma.song.findMany({});
  const playListSeed = new Array(10).fill(1).map(async (_, i) => {
    return prisma.playlist.create({
      data: {
        name: `Playlist #${i + 1}`,
        userId: user.id,
        songs: {
          connect: songs.map((song) => ({ id: song.id })),
        },
      },
    });
  });

  await Promise.all(playListSeed).then((values) => {
    console.log("playlists: ", values);
  });

};

run()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
