"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGameServerCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Updates information about a registered game server to help GameLift FleetIQ to track game server
 *             availability. This operation is called by a game server process that is running on an
 *             instance in a game server group. </p>
 *         <p>Use this operation to update the following types of game server information. You can
 *             make all three types of updates in the same request:</p>
 *         <ul>
 *             <li>
 *                <p>To update the game server's utilization status, identify the game server and game server group
 *                     and specify the current utilization status. Use this status to identify when
 *                     game servers are currently hosting games and when they are available to be
 *                     claimed.</p>
 *             </li>
 *             <li>
 *                <p>To report health status, identify the game server and game server group and set health check
 *                     to <code>HEALTHY</code>. If a game server does not report health status for a
 *                     certain length of time, the game server is no longer considered healthy. As a
 *                     result, it will be eventually deregistered from the game server group to avoid
 *                     affecting utilization metrics. The best practice is to report health every 60
 *                     seconds.</p>
 *             </li>
 *             <li>
 *                <p>To change game server metadata, provide updated game server data.</p>
 *             </li>
 *          </ul>
 *         <p>Once a game server is successfully updated, the relevant statuses and timestamps are updated.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">GameLift FleetIQ Guide</a>
 *         </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>RegisterGameServer</a> |
 *                     <a>ListGameServers</a> |
 *                     <a>ClaimGameServer</a> |
 *                     <a>DescribeGameServer</a> |
 *                     <a>UpdateGameServer</a> |
 *                     <a>DeregisterGameServer</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateGameServerCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateGameServerCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UpdateGameServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGameServerCommandInput} for command's `input` shape.
 * @see {@link UpdateGameServerCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateGameServerCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateGameServerCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateGameServerInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateGameServerOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateGameServerCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateGameServerCommand(output, context);
    }
}
exports.UpdateGameServerCommand = UpdateGameServerCommand;
//# sourceMappingURL=UpdateGameServerCommand.js.map