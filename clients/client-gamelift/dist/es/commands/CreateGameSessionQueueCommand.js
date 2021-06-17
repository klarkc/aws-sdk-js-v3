import { __extends } from "tslib";
import { CreateGameSessionQueueInput, CreateGameSessionQueueOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateGameSessionQueueCommand, serializeAws_json1_1CreateGameSessionQueueCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a placement queue that processes requests for new game sessions. A queue uses
 *             FleetIQ algorithms to determine the best placement locations and find an
 *             available game server there, then prompts the game server process to start a new game
 *             session. </p>
 *         <p>A game session queue is configured with a set of destinations (GameLift fleets or
 *             aliases), which determine the locations where the queue can place new game sessions.
 *             These destinations can span multiple fleet types (Spot and On-Demand), instance types,
 *             and AWS Regions. If the queue includes multi-location fleets, the queue is able to place
 *             game sessions in all of a fleet's remote locations. You can opt to filter out individual
 *             locations if needed.</p>
 *         <p>The queue configuration also determines how FleetIQ selects the best available placement
 *             for a new game session. Before searching for an available game server, FleetIQ first
 *             prioritizes the queue's destinations and locations, with the best placement locations on
 *             top. You can set up the queue to use the FleetIQ default prioritization or provide an
 *             alternate set of priorities.</p>
 *         <p>To create a new queue, provide a name, timeout value, and a list of destinations.
 *             Optionally, specify a sort configuration and/or a filter, and define a set of latency
 *             cap policies. You can also include the ARN for an Amazon Simple Notification Service
 *             (SNS) topic to receive notifications of game session placement activity. Notifications
 *             using SNS or CloudWatch events is the preferred way to track placement activity.</p>
 *         <p>If successful, a new <code>GameSessionQueue</code> object is returned with an assigned
 *             queue ARN. New game session requests, which are submitted to the  queue with <a>StartGameSessionPlacement</a> or <a>StartMatchmaking</a>,
 *             reference a queue's name or ARN. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-design.html">
 *             Design a game session queue</a>
 *         </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-creating.html">
 *             Create a game session queue</a>
 *         </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateGameSessionQueue</a> |
 *                     <a>DescribeGameSessionQueues</a> |
 *                     <a>UpdateGameSessionQueue</a> |
 *                     <a>DeleteGameSessionQueue</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateGameSessionQueueCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateGameSessionQueueCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreateGameSessionQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGameSessionQueueCommandInput} for command's `input` shape.
 * @see {@link CreateGameSessionQueueCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateGameSessionQueueCommand = /** @class */ (function (_super) {
    __extends(CreateGameSessionQueueCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateGameSessionQueueCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CreateGameSessionQueueCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "CreateGameSessionQueueCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateGameSessionQueueInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateGameSessionQueueOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateGameSessionQueueCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateGameSessionQueueCommand(input, context);
    };
    CreateGameSessionQueueCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateGameSessionQueueCommand(output, context);
    };
    return CreateGameSessionQueueCommand;
}($Command));
export { CreateGameSessionQueueCommand };
//# sourceMappingURL=CreateGameSessionQueueCommand.js.map