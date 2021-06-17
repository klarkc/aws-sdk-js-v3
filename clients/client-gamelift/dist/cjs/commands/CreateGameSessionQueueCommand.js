"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGameSessionQueueCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreateGameSessionQueueCommand extends smithy_client_1.Command {
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
        const commandName = "CreateGameSessionQueueCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateGameSessionQueueInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateGameSessionQueueOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateGameSessionQueueCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateGameSessionQueueCommand(output, context);
    }
}
exports.CreateGameSessionQueueCommand = CreateGameSessionQueueCommand;
//# sourceMappingURL=CreateGameSessionQueueCommand.js.map