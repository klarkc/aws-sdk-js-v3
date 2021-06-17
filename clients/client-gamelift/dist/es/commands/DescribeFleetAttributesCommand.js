import { __extends } from "tslib";
import { DescribeFleetAttributesInput, DescribeFleetAttributesOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeFleetAttributesCommand, serializeAws_json1_1DescribeFleetAttributesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves core fleet-wide properties, including the computing hardware and deployment
 *             configuration for all instances in the fleet.</p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To get attributes for one or more specific fleets, provide a list of fleet IDs
 *                     or fleet ARNs. </p>
 *             </li>
 *             <li>
 *                 <p>To get attributes for all fleets, do not provide a fleet identifier. </p>
 *             </li>
 *          </ul>
 *         <p>When requesting attributes for multiple fleets, use the pagination parameters to
 *             retrieve results as a set of sequential pages. </p>
 *         <p>If successful, a <code>FleetAttributes</code> object is returned for each fleet
 *             requested, unless the fleet identifier is not found. </p>
 *         <note>
 *             <p>Some API operations limit the number of fleet IDs that allowed in one request. If a
 *                 request exceeds this limit, the request fails and the error message contains the
 *                 maximum allowed number.</p>
 *         </note>
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
 *             <a>ListFleets</a> |
 *                     <a>DescribeEC2InstanceLimits</a> |
 *                     <a>DescribeFleetAttributes</a> |
 *                     <a>DescribeFleetCapacity</a> |
 *                     <a>DescribeFleetEvents</a> |
 *                     <a>DescribeFleetLocationAttributes</a> |
 *                     <a>DescribeFleetPortSettings</a> |
 *                     <a>DescribeFleetUtilization</a> |
 *                     <a>DescribeRuntimeConfiguration</a> |
 *                     <a>DescribeScalingPolicies</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetAttributesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetAttributesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeFleetAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetAttributesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFleetAttributesCommand = /** @class */ (function (_super) {
    __extends(DescribeFleetAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFleetAttributesCommand(input) {
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
    DescribeFleetAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DescribeFleetAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFleetAttributesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFleetAttributesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFleetAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeFleetAttributesCommand(input, context);
    };
    DescribeFleetAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeFleetAttributesCommand(output, context);
    };
    return DescribeFleetAttributesCommand;
}($Command));
export { DescribeFleetAttributesCommand };
//# sourceMappingURL=DescribeFleetAttributesCommand.js.map