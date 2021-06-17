import { __extends } from "tslib";
import { DescribeGameServerGroupInput, DescribeGameServerGroupOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeGameServerGroupCommand, serializeAws_json1_1DescribeGameServerGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Retrieves information on a game server group. This operation returns only properties
 *             related to GameLift FleetIQ. To view or update properties for the corresponding Auto Scaling group,
 *             such as launch template, auto scaling policies, and maximum/minimum group size, access
 *             the Auto Scaling group directly.</p>
 *         <p>To get attributes for a game server group, provide a group name or ARN value. If
 *             successful, a <a>GameServerGroup</a> object is returned.</p>
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
 * import { GameLiftClient, DescribeGameServerGroupCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeGameServerGroupCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeGameServerGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGameServerGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeGameServerGroupCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeGameServerGroupCommand = /** @class */ (function (_super) {
    __extends(DescribeGameServerGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeGameServerGroupCommand(input) {
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
    DescribeGameServerGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DescribeGameServerGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeGameServerGroupInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeGameServerGroupOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeGameServerGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeGameServerGroupCommand(input, context);
    };
    DescribeGameServerGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeGameServerGroupCommand(output, context);
    };
    return DescribeGameServerGroupCommand;
}($Command));
export { DescribeGameServerGroupCommand };
//# sourceMappingURL=DescribeGameServerGroupCommand.js.map