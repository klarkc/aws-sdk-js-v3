import { __extends } from "tslib";
import { StartFleetActionsInput, StartFleetActionsOutput } from "../models/models_0";
import { deserializeAws_json1_1StartFleetActionsCommand, serializeAws_json1_1StartFleetActionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Resumes certain types of activity on fleet instances that were suspended with <a>StopFleetActions</a>. For multi-location fleets, fleet actions are managed
 *             separately for each location. Currently, this operation is used to restart a fleet's
 *             auto-scaling activity.</p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To restart actions on instances in the fleet's home Region, provide a fleet ID
 *                     and the type of actions to resume. </p>
 *             </li>
 *             <li>
 *                 <p>To restart actions on instances in one of the fleet's remote locations,
 *                     provide a fleet ID, a location name, and the type of actions to resume.  </p>
 *             </li>
 *          </ul>
 *         <p>If successful, GameLift once again initiates scaling events as triggered by the fleet's
 *             scaling policies. If actions on the fleet location were never stopped, this operation
 *             will have no effect. You can view a fleet's stopped actions using <a>DescribeFleetAttributes</a> or <a>DescribeFleetLocationAttributes</a>.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift fleets</a>
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
 * import { GameLiftClient, StartFleetActionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StartFleetActionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new StartFleetActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartFleetActionsCommandInput} for command's `input` shape.
 * @see {@link StartFleetActionsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartFleetActionsCommand = /** @class */ (function (_super) {
    __extends(StartFleetActionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartFleetActionsCommand(input) {
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
    StartFleetActionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "StartFleetActionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartFleetActionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: StartFleetActionsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartFleetActionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartFleetActionsCommand(input, context);
    };
    StartFleetActionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartFleetActionsCommand(output, context);
    };
    return StartFleetActionsCommand;
}($Command));
export { StartFleetActionsCommand };
//# sourceMappingURL=StartFleetActionsCommand.js.map