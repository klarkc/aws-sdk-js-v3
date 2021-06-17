"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeGameSessionDetailsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves additional game session properties, including the game session protection
 *             policy in force, a set of one or more game sessions in a specific fleet location. You
 *             can optionally filter the results by current game session status. Alternatively, use
 *                 <a>SearchGameSessions</a> to request a set of active game sessions that
 *             are filtered by certain criteria. To retrieve all game session properties, use <a>DescribeGameSessions</a>. </p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To retrieve details for all game sessions that are currently running on all
 *                     locations in a fleet, provide a fleet or alias ID, with an optional status
 *                     filter. This approach returns details from the fleet's home Region and all
 *                     remote locations.</p>
 *             </li>
 *             <li>
 *                 <p>To retrieve details for all game sessions that are currently running on a
 *                     specific fleet location, provide a fleet or alias ID and a location name, with
 *                     optional status filter. The location can be the fleet's home Region or any
 *                     remote location.</p>
 *             </li>
 *             <li>
 *                 <p>To retrieve details for a specific game session, provide the game session ID.
 *                     This approach looks for the game session ID in all fleets that reside in the AWS
 *                     Region defined in the request.</p>
 *             </li>
 *          </ul>
 *         <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p>
 *         <p>If successful, a <code>GameSessionDetail</code> object is returned for each game
 *             session that matches the request.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateGameSession</a> |
 *                     <a>DescribeGameSessions</a> |
 *                     <a>DescribeGameSessionDetails</a> |
 *                     <a>SearchGameSessions</a> |
 *                     <a>UpdateGameSession</a> |
 *                     <a>GetGameSessionLogUrl</a> |
 *                     <a>StartGameSessionPlacement</a> |
 *                     <a>DescribeGameSessionPlacement</a> |
 *                     <a>StopGameSessionPlacement</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeGameSessionDetailsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeGameSessionDetailsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeGameSessionDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGameSessionDetailsCommandInput} for command's `input` shape.
 * @see {@link DescribeGameSessionDetailsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeGameSessionDetailsCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeGameSessionDetailsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeGameSessionDetailsInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeGameSessionDetailsOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeGameSessionDetailsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeGameSessionDetailsCommand(output, context);
    }
}
exports.DescribeGameSessionDetailsCommand = DescribeGameSessionDetailsCommand;
//# sourceMappingURL=DescribeGameSessionDetailsCommand.js.map