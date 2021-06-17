"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlayerSessionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Reserves an open player slot in a game session for a player. New player sessions can be
 *             created in any game session with an open slot that is in <code>ACTIVE</code> status and
 *             has a player creation policy of <code>ACCEPT_ALL</code>. You can add a group of players
 *             to a game session with <a>CreatePlayerSessions</a>. </p>
 *          <p>To create a player session, specify a game session ID, player ID, and optionally a set of
 *             player data. </p>
 *         <p>If successful, a slot is reserved in the game session for the player and a new <a>PlayerSession</a> object is returned with a player session ID. The player
 *             references the player session ID when sending a connection request to the game session,
 *             and the game server can use it to validate the player reservation with the GameLift service. Player
 *             sessions cannot be updated. </p>
 *          <p>
 *             <i>Available in Amazon GameLift Local.</i>
 *          </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreatePlayerSession</a> |
 *                     <a>CreatePlayerSessions</a> |
 *                     <a>DescribePlayerSessions</a> |
 *                     <a>StartGameSessionPlacement</a> |
 *                     <a>DescribeGameSessionPlacement</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreatePlayerSessionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreatePlayerSessionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreatePlayerSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePlayerSessionCommandInput} for command's `input` shape.
 * @see {@link CreatePlayerSessionCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreatePlayerSessionCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "GameLiftClient";
        const commandName = "CreatePlayerSessionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreatePlayerSessionInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreatePlayerSessionOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreatePlayerSessionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreatePlayerSessionCommand(output, context);
    }
}
exports.CreatePlayerSessionCommand = CreatePlayerSessionCommand;
//# sourceMappingURL=CreatePlayerSessionCommand.js.map