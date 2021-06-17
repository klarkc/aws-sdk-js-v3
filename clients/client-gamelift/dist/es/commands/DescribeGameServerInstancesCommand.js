import { __extends } from "tslib";
import { DescribeGameServerInstancesInput, DescribeGameServerInstancesOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeGameServerInstancesCommand, serializeAws_json1_1DescribeGameServerInstancesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Retrieves status information about the Amazon EC2 instances associated with a GameLift FleetIQ
 *             game server group. Use this operation to detect when instances are active or not
 *             available to host new game servers. If you are looking for instance configuration
 *             information, call <a>DescribeGameServerGroup</a> or access the corresponding
 *             Auto Scaling group properties.</p>
 *         <p>To request status for all instances in the game server group, provide a game server
 *             group ID only. To request status for specific instances, provide the game server group
 *             ID and one or more instance IDs. Use the pagination parameters to retrieve results in
 *             sequential segments. If successful, a collection of <code>GameServerInstance</code>
 *             objects is returned.
 *
 *         </p>
 *         <p>This operation is not designed to be called with every game server claim request; this
 *             practice can cause you to exceed your API limit, which results in errors. Instead, as a
 *             best practice, cache the results and refresh your cache no more than once every 10
 *             seconds.</p>
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
 * import { GameLiftClient, DescribeGameServerInstancesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeGameServerInstancesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeGameServerInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGameServerInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeGameServerInstancesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeGameServerInstancesCommand = /** @class */ (function (_super) {
    __extends(DescribeGameServerInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeGameServerInstancesCommand(input) {
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
    DescribeGameServerInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DescribeGameServerInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeGameServerInstancesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeGameServerInstancesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeGameServerInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeGameServerInstancesCommand(input, context);
    };
    DescribeGameServerInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeGameServerInstancesCommand(output, context);
    };
    return DescribeGameServerInstancesCommand;
}($Command));
export { DescribeGameServerInstancesCommand };
//# sourceMappingURL=DescribeGameServerInstancesCommand.js.map