import "reflect-metadata";

import { IntentsBitField } from "discord.js";

import { dirname, importx } from "../../../importer/build/esm/index.mjs";
import { Client } from "../../src/index.js";

export class Main {
  private static _client: Client;

  static get Client(): Client {
    return this._client;
  }

  static async start(): Promise<void> {
    this._client = new Client({
      botGuilds: [(client) => client.guilds.cache.map((guild) => guild.id)],
      intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GUILD_MESSAGE_REACTIONS,
      ],
      partials: ["MESSAGE", "CHANNEL", "REACTION"],
      silent: false,
    });

    this.Client.on("ready", () => {
      console.log("Bot started...");
    });

    this.Client.on("messageReactionAdd", (reaction, user) => {
      this.Client.executeReaction(reaction, user);
    });

    await importx(dirname(import.meta.url) + "/commands/**/*.{js,ts}");

    // let's start the bot
    if (!process.env.BOT_TOKEN) {
      throw Error("Could not find BOT_TOKEN in your environment");
    }
    await this._client.login(process.env.BOT_TOKEN);
  }
}

Main.start();
