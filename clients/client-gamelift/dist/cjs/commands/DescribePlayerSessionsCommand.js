"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribePlayerSessionsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves properties for one or more player sessions. </p>
 *         <p>This action can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To retrieve a specific player session, provide the player session ID
 *                     only.</p>
 *             </li>
 *             <li>
 *                 <p>To retrieve all player sessions in a game session, provide the game session ID
 *                     only.</p>
 *             </li>
 *             <li>
 *                 <p>To retrieve all player sessions for a specific player, provide a player ID
 *                     only.</p>
 *             </li>
 *          </ul>
 *          <p>To request player sessions, specify either a player session ID, game session ID, or player
 *             ID. You can filter this request by player session status. Use the pagination parameters
 *             to retrieve results as a set of sequential pages. </p>
 *         <p>If successful, a <code>PlayerSession</code> object is returned for each session that
 *             matches the request.</p>
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
 * import { GameLiftClient, DescribePlayerSessionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribePlayerSessionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribePlayerSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePlayerSessionsCommandInput} for command's `input` shape.
 * @see {@link DescribePlayerSessionsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribePlayerSessionsCommand extends smithy_client_1.Command {
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
        const commandName = "DescribePlayerSessionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribePlayerSessionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribePlayerSessionsOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribePlayerSessionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribePlayerSessionsCommand(output, context);
    }
}
exports.DescribePlayerSessionsCommand = DescribePlayerSessionsCommand;
//# sourceMappingURL=DescribePlayerSessionsCommand.js.map