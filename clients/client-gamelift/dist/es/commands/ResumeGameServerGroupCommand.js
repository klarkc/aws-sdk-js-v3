import { __extends } from "tslib";
import { ResumeGameServerGroupInput, ResumeGameServerGroupOutput } from "../models/models_0";
import { deserializeAws_json1_1ResumeGameServerGroupCommand, serializeAws_json1_1ResumeGameServerGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Reinstates activity on a game server group after it has been suspended. A game server
 *             group might be suspended by the<a>SuspendGameServerGroup</a> operation, or it
 *             might be suspended involuntarily due to a configuration problem. In the second case, you
 *             can manually resume activity on the group once the configuration problem has been
 *             resolved. Refer to the game server group status and status reason for more information
 *             on why group activity is suspended.</p>
 *         <p>To resume activity, specify a game server group ARN and the type of activity to be
 *             resumed. If successful, a <a>GameServerGroup</a> object is returned showing
 *             that the resumed activity is no longer listed in <code>SuspendedActions</code>. </p>
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
 * import { GameLiftClient, ResumeGameServerGroupCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ResumeGameServerGroupCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new ResumeGameServerGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResumeGameServerGroupCommandInput} for command's `input` shape.
 * @see {@link ResumeGameServerGroupCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResumeGameServerGroupCommand = /** @class */ (function (_super) {
    __extends(ResumeGameServerGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResumeGameServerGroupCommand(input) {
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
    ResumeGameServerGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "ResumeGameServerGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResumeGameServerGroupInput.filterSensitiveLog,
            outputFilterSensitiveLog: ResumeGameServerGroupOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResumeGameServerGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ResumeGameServerGroupCommand(input, context);
    };
    ResumeGameServerGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ResumeGameServerGroupCommand(output, context);
    };
    return ResumeGameServerGroupCommand;
}($Command));
export { ResumeGameServerGroupCommand };
//# sourceMappingURL=ResumeGameServerGroupCommand.js.map