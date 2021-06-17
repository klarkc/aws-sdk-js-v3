import { __extends } from "tslib";
import { StopFleetActionsInput, StopFleetActionsOutput } from "../models/models_0";
import { deserializeAws_json1_1StopFleetActionsCommand, serializeAws_json1_1StopFleetActionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Suspends certain types of activity in a fleet location. Currently, this operation is
 *             used to stop auto-scaling activity. For multi-location fleets, fleet actions are managed
 *             separately for each location. </p>
 *         <p>Stopping fleet actions has several potential purposes. It allows you to temporarily
 *             stop auto-scaling activity but retain your scaling policies for use in the future. For
 *             multi-location fleets, you can set up fleet-wide auto-scaling, and then opt out of it
 *             for certain locations. </p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To stop actions on instances in the fleet's home Region, provide a fleet ID
 *                     and the type of actions to suspend. </p>
 *             </li>
 *             <li>
 *                 <p>To stop actions on instances in one of the fleet's remote locations, provide a
 *                     fleet ID, a location name, and the type of actions to suspend. </p>
 *             </li>
 *          </ul>
 *         <p>If successful, GameLift no longer initiates scaling events except in response to manual
 *             changes using <a>UpdateFleetCapacity</a>. You can view a fleet's stopped
 *             actions using <a>DescribeFleetAttributes</a> or <a>DescribeFleetLocationAttributes</a>. Suspended activity can be restarted
 *             using <a>StartFleetActions</a>.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateFleet</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>PutScalingPolicy</a> |
 *                     <a>DescribeEC2InstanceLimits</a> |
 *                     <a>DescribeFleetAttributes</a> |
 *                     <a>DescribeFleetLocationAttributes</a> |
 *                     <a>UpdateFleetAttributes</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>DeleteFleet</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, StopFleetActionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StopFleetActionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new StopFleetActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopFleetActionsCommandInput} for command's `input` shape.
 * @see {@link StopFleetActionsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopFleetActionsCommand = /** @class */ (function (_super) {
    __extends(StopFleetActionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopFleetActionsCommand(input) {
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
    StopFleetActionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "StopFleetActionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopFleetActionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: StopFleetActionsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopFleetActionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopFleetActionsCommand(input, context);
    };
    StopFleetActionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopFleetActionsCommand(output, context);
    };
    return StopFleetActionsCommand;
}($Command));
export { StopFleetActionsCommand };
//# sourceMappingURL=StopFleetActionsCommand.js.map