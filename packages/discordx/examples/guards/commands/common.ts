import type { CommandInteraction } from "discord.js";

import type { ArgsOf } from "../../../src/index.js";
import { Discord, Guard, On, Slash } from "../../../src/index.js";
import { ErrorHandler } from "../guards/Error.js";
import { NotBot } from "../guards/NotBot.js";

@Discord()
export class Example {
  @On("messageCreate")
  @Guard(NotBot)
  onMessage([message]: ArgsOf<"messageCreate">): void {
    console.log(message.content);
  }

  @Slash("hello")
  @Guard(NotBot)
  hello(interaction: CommandInteraction): void {
    console.log(interaction);
  }

  @Slash("error-guard")
  @Guard(ErrorHandler, NotBot)
  errorGuard(): void {
    throw Error("My custom error");
  }
}
