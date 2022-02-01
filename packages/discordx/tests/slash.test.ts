// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import {
  ApplicationCommandOptionType,
  ApplicationCommandPermissionType,
  Channel,
  CommandInteraction,
  GuildMember,
  Interaction,
  Role,
  TextChannel,
  User,
  VoiceChannel,
} from "discord.js";

import {
  Client,
  Discord,
  Guard,
  Guild,
  Permission,
  Slash,
  SlashChoice,
  SlashGroup,
  SlashOption,
} from "../build/cjs/index.js";

type Data = { passed: boolean };
enum TextChoices {
  "Good Bye" = "GoodBye",
  Hello = "Hello",
}

@Discord()
@Guild("693401527494377482")
@SlashGroup("testing", "Testing group description", {
  maths: "maths group description",
  text: "text group description",
})
@Guard((params, client, next, datas) => {
  datas.passed = true;
  return next();
})
export abstract class AppDiscord {
  @Slash("add", { description: "Addition" })
  @SlashGroup("maths")
  add(
    @SlashOption("x", { description: "x value" })
    x: number,
    @SlashOption("y", { description: "y value" })
    y: number,
    interaction: CommandInteraction,
    client: Client,
    datas: Data
  ): unknown {
    return ["/testing maths add", x + y, interaction, datas.passed];
  }

  @Slash("multiply", { description: "Multiply" })
  @SlashGroup("maths")
  multiply(
    @SlashOption("x", { description: "x value" })
    x: number,
    @SlashOption("y", { description: "y value" })
    y: number,
    interaction: CommandInteraction,
    client: Client,
    datas: Data
  ): unknown {
    return ["/testing maths multiply", x * y, interaction, datas.passed];
  }

  @Slash("hello")
  @SlashGroup("text")
  hello(
    @SlashChoice(TextChoices)
    @SlashOption("text")
    text: TextChoices,
    interaction: CommandInteraction,
    client: Client,
    datas: Data
  ): unknown {
    return ["/testing text hello", text, interaction, datas.passed];
  }

  @Slash("hello")
  root(
    @SlashOption("text")
    text: string,
    @SlashOption("text2", { required: false })
    text2: string,
    interaction: CommandInteraction,
    client: Client,
    datas: Data
  ): unknown {
    return ["/testing hello text", text, text2, interaction, datas.passed];
  }
}

@Discord()
@Guild("invalid_id")
@Guard((params, client, next, datas) => {
  datas.passed = true;
  return next();
})
export abstract class AppDiscord1 {
  @Slash("hello")
  @Permission({
    id: "123",
    permission: true,
    type: ApplicationCommandPermissionType.User,
  })
  add(
    @SlashOption("text", { required: false })
    text: string,
    interaction: CommandInteraction,
    client: Client,
    datas: Data
  ): unknown {
    return ["/hello", text, interaction, datas.passed];
  }

  @Slash("inference")
  inference(
    @SlashOption("text")
    text: string,

    @SlashOption("bool")
    bool: boolean,

    @SlashOption("nb")
    nb: number,

    @SlashOption("channel")
    channel: Channel,

    @SlashOption("textchannel", { required: false })
    textChannel: TextChannel,

    @SlashOption("voicechannel", { required: false })
    voiceChannel: VoiceChannel,

    @SlashOption("user", { required: false })
    clientUser: User,

    @SlashOption("role", { required: false })
    role: Role,

    @SlashOption("userorrole", {
      required: false,
      type: ApplicationCommandOptionType.Mentionable,
    })
    userorrole: GuildMember | User | Role,

    interaction: CommandInteraction,
    client: Client,
    datas: Data
  ): unknown {
    return ["/inference", "infer", interaction, datas.passed];
  }
}

const client = new Client({ intents: [] });

beforeAll(async () => {
  await client.build();
});

class FakeOption {
  name: string;
  type: ApplicationCommandOptionType;
  options: FakeOption[] | undefined;
  value: string | number;

  constructor(
    name: string,
    type: ApplicationCommandOptionType,
    value: string | number,
    options?: FakeOption[]
  ) {
    this.type = type;
    this.name = name;
    this.options = options || undefined;
    this.value = value;
  }
}

class SlashOptionResolver {
  data: FakeOption[];

  constructor(options: FakeOption[]) {
    this.data = options;
  }

  getLastNestedOption(options: readonly FakeOption[]): readonly FakeOption[] {
    const arrOptions = options;

    if (!arrOptions?.[0]?.options) {
      return arrOptions;
    }

    return this.getLastNestedOption(arrOptions?.[0].options);
  }

  get(name: string) {
    const options = this.getLastNestedOption(this.data);
    return options.find((op) => op.name === name)?.value;
  }
  getString(name: string) {
    const options = this.getLastNestedOption(this.data);
    return options.find((op) => op.name === name)?.value;
  }
  getBoolean(name: string) {
    const options = this.getLastNestedOption(this.data);
    return options.find((op) => op.name === name)?.value;
  }
  getNumber(name: string) {
    const options = this.getLastNestedOption(this.data);
    return options.find((op) => op.name === name)?.value;
  }
  getInteger(name: string) {
    const options = this.getLastNestedOption(this.data);
    return options.find((op) => op.name === name)?.value;
  }
  getRole(name: string) {
    const options = this.getLastNestedOption(this.data);
    return options.find((op) => op.name === name)?.value;
  }
  getChannel(name: string) {
    const options = this.getLastNestedOption(this.data);
    return options.find((op) => op.name === name)?.value;
  }
  getMentionable(name: string) {
    const options = this.getLastNestedOption(this.data);
    return options.find((op) => op.name === name)?.value;
  }
  getMember(name: string) {
    const options = this.getLastNestedOption(this.data);
    return options.find((op) => op.name === name)?.value;
  }
  getUser(name: string) {
    const options = this.getLastNestedOption(this.data);
    return options.find((op) => op.name === name)?.value;
  }
}

class FakeInteraction {
  commandName: string;
  options: SlashOptionResolver;

  constructor(commandName: string, options: FakeOption[]) {
    this.commandName = commandName;
    this.options = new SlashOptionResolver(options);
  }

  isChatInputCommand() {
    return true;
  }

  isButton() {
    return false;
  }

  isContextMenuCommand() {
    return false;
  }

  isSelectMenu() {
    return false;
  }

  isAutocomplete() {
    return false;
  }
}

describe("Slash", () => {
  it("Should create the slash structure", async () => {
    expect(client.applicationCommands[0]?.guilds).toEqual(["invalid_id"]);
    expect(client.applicationCommands[0]?.permissions).toEqual([
      {
        id: "123",
        permission: true,
        type: 2,
      },
    ]);

    const slashesObjects = await Promise.all(
      client.applicationCommands.map((slash) => slash.toJSON())
    );

    expect(slashesObjects).toEqual([
      {
        defaultPermission: true,
        description: "hello",
        name: "hello",
        options: [
          {
            autocomplete: undefined,
            channelTypes: undefined,
            choices: undefined,
            description: undefined,
            maxValue: undefined,
            minValue: undefined,
            name: "text",
            options: undefined,
            required: false,
            type: ApplicationCommandOptionType.String,
          },
        ],
        type: ApplicationCommandOptionType.Subcommand,
      },
      {
        defaultPermission: true,
        description: "inference",
        name: "inference",
        options: [
          {
            autocomplete: undefined,
            channelTypes: undefined,
            choices: undefined,
            description: undefined,
            maxValue: undefined,
            minValue: undefined,
            name: "text",
            options: undefined,
            required: true,
            type: ApplicationCommandOptionType.String,
          },
          {
            autocomplete: undefined,
            channelTypes: undefined,
            choices: undefined,
            description: undefined,
            maxValue: undefined,
            minValue: undefined,
            name: "bool",
            options: undefined,
            required: true,
            type: ApplicationCommandOptionType.Boolean,
          },
          {
            autocomplete: undefined,
            channelTypes: undefined,
            choices: undefined,
            description: undefined,
            maxValue: undefined,
            minValue: undefined,
            name: "nb",
            options: undefined,
            required: true,
            type: ApplicationCommandOptionType.String,
          },
          {
            autocomplete: undefined,
            channelTypes: undefined,
            choices: undefined,
            description: undefined,
            maxValue: undefined,
            minValue: undefined,
            name: "channel",
            options: undefined,
            required: true,
            type: ApplicationCommandOptionType.Channel,
          },
          {
            autocomplete: undefined,
            channelTypes: undefined,
            choices: undefined,
            description: undefined,
            maxValue: undefined,
            minValue: undefined,
            name: "textchannel",
            options: undefined,
            required: false,
            type: ApplicationCommandOptionType.Channel,
          },
          {
            autocomplete: undefined,
            channelTypes: undefined,
            choices: undefined,
            description: undefined,
            maxValue: undefined,
            minValue: undefined,
            name: "voicechannel",
            options: undefined,
            required: false,
            type: ApplicationCommandOptionType.Channel,
          },
          {
            autocomplete: undefined,
            channelTypes: undefined,
            choices: undefined,
            description: undefined,
            maxValue: undefined,
            minValue: undefined,
            name: "user",
            options: undefined,
            required: false,
            type: ApplicationCommandOptionType.User,
          },
          {
            autocomplete: undefined,
            channelTypes: undefined,
            choices: undefined,
            description: undefined,
            maxValue: undefined,
            minValue: undefined,
            name: "role",
            options: undefined,
            required: false,
            type: ApplicationCommandOptionType.Role,
          },
          {
            autocomplete: undefined,
            channelTypes: undefined,
            choices: undefined,
            description: undefined,
            maxValue: undefined,
            minValue: undefined,
            name: "userorrole",
            options: undefined,
            required: false,
            type: ApplicationCommandOptionType.Mentionable,
          },
        ],
        type: ApplicationCommandOptionType.Subcommand,
      },
      {
        defaultPermission: true,
        description: "Testing group description",
        name: "testing",
        options: [
          {
            autocomplete: undefined,
            channelTypes: undefined,
            choices: undefined,
            description: "text group description",
            maxValue: undefined,
            minValue: undefined,
            name: "text",
            options: [
              {
                autocomplete: undefined,
                channelTypes: undefined,
                choices: undefined,
                description: "hello",
                maxValue: undefined,
                minValue: undefined,
                name: "hello",
                options: [
                  {
                    autocomplete: undefined,
                    channelTypes: undefined,
                    choices: [
                      {
                        name: "Good Bye",
                        value: "GoodBye",
                      },
                      {
                        name: "Hello",
                        value: "Hello",
                      },
                    ],
                    description: undefined,
                    maxValue: undefined,
                    minValue: undefined,
                    name: "text",
                    options: undefined,
                    required: true,
                    type: ApplicationCommandOptionType.String,
                  },
                ],
                required: undefined,
                type: ApplicationCommandOptionType.Subcommand,
              },
            ],
            required: undefined,
            type: ApplicationCommandOptionType.SubcommandGroup,
          },
          {
            autocomplete: undefined,
            channelTypes: undefined,
            choices: undefined,
            description: "maths group description",
            maxValue: undefined,
            minValue: undefined,
            name: "maths",
            options: [
              {
                autocomplete: undefined,
                channelTypes: undefined,
                choices: undefined,
                description: "Multiply",
                maxValue: undefined,
                minValue: undefined,
                name: "multiply",
                options: [
                  {
                    autocomplete: undefined,
                    channelTypes: undefined,
                    choices: undefined,
                    description: "x value",
                    maxValue: undefined,
                    minValue: undefined,
                    name: "x",
                    options: undefined,
                    required: true,
                    type: ApplicationCommandOptionType.String,
                  },
                  {
                    autocomplete: undefined,
                    channelTypes: undefined,
                    choices: undefined,
                    description: "y value",
                    maxValue: undefined,
                    minValue: undefined,
                    name: "y",
                    options: undefined,
                    required: true,
                    type: ApplicationCommandOptionType.String,
                  },
                ],
                required: undefined,
                type: ApplicationCommandOptionType.Subcommand,
              },
              {
                autocomplete: undefined,
                channelTypes: undefined,
                choices: undefined,
                description: "Addition",
                maxValue: undefined,
                minValue: undefined,
                name: "add",
                options: [
                  {
                    autocomplete: undefined,
                    channelTypes: undefined,
                    choices: undefined,
                    description: "x value",
                    maxValue: undefined,
                    minValue: undefined,
                    name: "x",
                    options: undefined,
                    required: true,
                    type: ApplicationCommandOptionType.String,
                  },
                  {
                    autocomplete: undefined,
                    channelTypes: undefined,
                    choices: undefined,
                    description: "y value",
                    maxValue: undefined,
                    minValue: undefined,
                    name: "y",
                    options: undefined,
                    required: true,
                    type: ApplicationCommandOptionType.String,
                  },
                ],
                required: undefined,
                type: ApplicationCommandOptionType.Subcommand,
              },
            ],
            required: undefined,
            type: ApplicationCommandOptionType.SubcommandGroup,
          },
          {
            autocomplete: undefined,
            channelTypes: undefined,
            choices: undefined,
            description: "hello",
            maxValue: undefined,
            minValue: undefined,
            name: "hello",
            options: [
              {
                autocomplete: undefined,
                channelTypes: undefined,
                choices: undefined,
                description: undefined,
                maxValue: undefined,
                minValue: undefined,
                name: "text",
                options: undefined,
                required: true,
                type: ApplicationCommandOptionType.String,
              },
              {
                autocomplete: undefined,
                channelTypes: undefined,
                choices: undefined,
                description: undefined,
                maxValue: undefined,
                minValue: undefined,
                name: "text2",
                options: undefined,
                required: false,
                type: ApplicationCommandOptionType.String,
              },
            ],
            required: undefined,
            type: ApplicationCommandOptionType.Subcommand,
          },
        ],
        type: ApplicationCommandOptionType.Subcommand,
      },
    ]);
  });

  it("Should execute the simple slash", async () => {
    const interaction = new FakeInteraction("hello", [
      new FakeOption("text", ApplicationCommandOptionType.String, "hello"),
    ]);

    const res = await client.executeInteraction(
      interaction as unknown as Interaction
    );
    expect(res).toEqual(["/hello", "hello", interaction, true]);
  });

  it("Should execute the simple grouped text slash", async () => {
    const interaction = new FakeInteraction("testing", [
      new FakeOption("hello", ApplicationCommandOptionType.Subcommand, "text", [
        new FakeOption(
          "text",
          ApplicationCommandOptionType.String,
          "testing hello text"
        ),
        new FakeOption(
          "text2",
          ApplicationCommandOptionType.String,
          "testing hello text2"
        ),
      ]),
    ]);

    const res = await client.executeInteraction(
      interaction as unknown as Interaction
    );
    expect(res).toEqual([
      "/testing hello text",
      "testing hello text",
      "testing hello text2",
      interaction,
      true,
    ]);
  });

  it("Should execute the simple subgrouped text slash", async () => {
    const interaction = new FakeInteraction("testing", [
      new FakeOption(
        "text",
        ApplicationCommandOptionType.SubcommandGroup,
        "text",
        [
          new FakeOption(
            "hello",
            ApplicationCommandOptionType.Subcommand,
            "text",
            [
              new FakeOption(
                "text",
                ApplicationCommandOptionType.String,
                "testing text hello"
              ),
            ]
          ),
        ]
      ),
    ]);

    const res = await client.executeInteraction(
      interaction as unknown as Interaction
    );
    expect(res).toEqual([
      "/testing text hello",
      "testing text hello",
      interaction,
      true,
    ]);
  });

  it("Should execute the simple subgrouped multiply slash", async () => {
    const interaction = new FakeInteraction("testing", [
      new FakeOption(
        "maths",
        ApplicationCommandOptionType.SubcommandGroup,
        "text",
        [
          new FakeOption(
            "multiply",
            ApplicationCommandOptionType.Subcommand,
            "text",
            [
              new FakeOption("x", ApplicationCommandOptionType.Number, 2),
              new FakeOption("y", ApplicationCommandOptionType.Number, 5),
            ]
          ),
        ]
      ),
    ]);

    const res = await client.executeInteraction(
      interaction as unknown as Interaction
    );
    expect(res).toEqual(["/testing maths multiply", 10, interaction, true]);
  });

  it("Should execute the simple subgrouped addition slash", async () => {
    const interaction = new FakeInteraction("testing", [
      new FakeOption(
        "maths",
        ApplicationCommandOptionType.SubcommandGroup,
        "text",
        [
          new FakeOption(
            "add",
            ApplicationCommandOptionType.Subcommand,
            "text",
            [
              new FakeOption("x", ApplicationCommandOptionType.Number, 2),
              new FakeOption("y", ApplicationCommandOptionType.Number, 5),
            ]
          ),
        ]
      ),
    ]);

    const res = await client.executeInteraction(
      interaction as unknown as Interaction
    );
    expect(res).toEqual(["/testing maths add", 7, interaction, true]);
  });

  it("Should execute the with optional option", async () => {
    const interaction = new FakeInteraction("hello", []);

    const res = await client.executeInteraction(
      interaction as unknown as Interaction
    );
    expect(res).toEqual(["/hello", undefined, interaction, true]);
  });

  it("Should not execute not found slash", async () => {
    const interaction = new FakeInteraction("testing", [
      new FakeOption(
        "maths",
        ApplicationCommandOptionType.SubcommandGroup,
        "text",
        [
          new FakeOption(
            "notfound",
            ApplicationCommandOptionType.Subcommand,
            "text",
            [
              new FakeOption("x", ApplicationCommandOptionType.Number, 2),
              new FakeOption("y", ApplicationCommandOptionType.Number, 5),
            ]
          ),
        ]
      ),
    ]);

    const res = await client.executeInteraction(
      interaction as unknown as Interaction
    );
    expect(res).toEqual(undefined);
  });
});
