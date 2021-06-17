import { __extends } from "tslib";
import { DescribeFleetLocationUtilizationInput, DescribeFleetLocationUtilizationOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeFleetLocationUtilizationCommand, serializeAws_json1_1DescribeFleetLocationUtilizationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves current usage data for a fleet location. Utilization data provides a
 *             snapshot of current game hosting activity at the requested location. Use this operation
 *             to retrieve utilization information for a fleet's remote location or home Region (you
 *             can also retrieve home Region utilization by calling
 *                 <code>DescribeFleetUtilization</code>).</p>
 *         <p>To retrieve utilization data, identify a fleet and location. </p>
 *         <p>If successful, a <code>FleetUtilization</code> object is returned for the requested
 *             fleet location. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift fleets</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateFleetLocations</a> |
 *                     <a>DescribeFleetLocationAttributes</a> |
 *                     <a>DescribeFleetLocationCapacity</a> |
 *                     <a>DescribeFleetLocationUtilization</a> |
 *                     <a>DescribeFleetAttributes</a> |
 *                     <a>DescribeFleetCapacity</a> |
 *                     <a>DescribeFleetUtilization</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>DeleteFleetLocations</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetLocationUtilizationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetLocationUtilizationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeFleetLocationUtilizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetLocationUtilizationCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetLocationUtilizationCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFleetLocationUtilizationCommand = /** @class */ (function (_super) {
    __extends(DescribeFleetLocationUtilizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFleetLocationUtilizationCommand(input) {
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
    DescribeFleetLocationUtilizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DescribeFleetLocationUtilizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFleetLocationUtilizationInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFleetLocationUtilizationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFleetLocationUtilizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeFleetLocationUtilizationCommand(input, context);
    };
    DescribeFleetLocationUtilizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeFleetLocationUtilizationCommand(output, context);
    };
    return DescribeFleetLocationUtilizationCommand;
}($Command));
export { DescribeFleetLocationUtilizationCommand };
//# sourceMappingURL=DescribeFleetLocationUtilizationCommand.js.map