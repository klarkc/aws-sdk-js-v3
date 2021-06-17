import { __extends } from "tslib";
import { UpdateGameServerInput, UpdateGameServerOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateGameServerCommand, serializeAws_json1_1UpdateGameServerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var UpdateGameServerCommand = /** @class */ (function (_super) {
    __extends(UpdateGameServerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateGameServerCommand(input) {
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
    UpdateGameServerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "UpdateGameServerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateGameServerInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateGameServerOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateGameServerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateGameServerCommand(input, context);
    };
    UpdateGameServerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateGameServerCommand(output, context);
    };
    return UpdateGameServerCommand;
}($Command));
export { UpdateGameServerCommand };
//# sourceMappingURL=UpdateGameServerCommand.js.map