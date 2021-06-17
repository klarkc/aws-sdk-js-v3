import { __extends } from "tslib";
import { SuspendGameServerGroupInput, SuspendGameServerGroupOutput } from "../models/models_0";
import { deserializeAws_json1_1SuspendGameServerGroupCommand, serializeAws_json1_1SuspendGameServerGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Temporarily stops activity on a game server group without terminating instances or the
 *             game server group. You can restart activity by calling <a>ResumeGameServerGroup</a>. You can suspend the following activity:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>Instance type replacement</b> - This activity
 *                     evaluates the current game hosting viability of all Spot instance types that are
 *                     defined for the game server group. It updates the Auto Scaling group to remove
 *                     nonviable Spot Instance types, which have a higher chance of game server
 *                     interruptions. It then balances capacity across the remaining viable Spot
 *                     Instance types. When this activity is suspended, the Auto Scaling group
 *                     continues with its current balance, regardless of viability. Instance
 *                     protection, utilization metrics, and capacity scaling activities continue to be
 *                     active. </p>
 *             </li>
 *          </ul>
 *         <p>To suspend activity, specify a game server group ARN and the type of activity to be
 *             suspended. If successful, a <a>GameServerGroup</a> object is returned showing
 *             that the activity is listed in <code>SuspendedActions</code>.</p>
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
 *             <a>CreateGameServerGroup</a> |
 *                     <a>ListGameServerGroups</a> |
 *                     <a>DescribeGameServerGroup</a> |
 *                     <a>UpdateGameServerGroup</a> |
 *                     <a>DeleteGameServerGroup</a> |
 *                     <a>ResumeGameServerGroup</a> |
 *                     <a>SuspendGameServerGroup</a> |
 *                     <a>DescribeGameServerInstances</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, SuspendGameServerGroupCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, SuspendGameServerGroupCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new SuspendGameServerGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SuspendGameServerGroupCommandInput} for command's `input` shape.
 * @see {@link SuspendGameServerGroupCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SuspendGameServerGroupCommand = /** @class */ (function (_super) {
    __extends(SuspendGameServerGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SuspendGameServerGroupCommand(input) {
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
    SuspendGameServerGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "SuspendGameServerGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SuspendGameServerGroupInput.filterSensitiveLog,
            outputFilterSensitiveLog: SuspendGameServerGroupOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SuspendGameServerGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SuspendGameServerGroupCommand(input, context);
    };
    SuspendGameServerGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SuspendGameServerGroupCommand(output, context);
    };
    return SuspendGameServerGroupCommand;
}($Command));
export { SuspendGameServerGroupCommand };
//# sourceMappingURL=SuspendGameServerGroupCommand.js.map