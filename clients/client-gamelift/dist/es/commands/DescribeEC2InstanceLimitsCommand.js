import { __extends } from "tslib";
import { DescribeEC2InstanceLimitsInput, DescribeEC2InstanceLimitsOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeEC2InstanceLimitsCommand, serializeAws_json1_1DescribeEC2InstanceLimitsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The GameLift service limits and current utilization for an AWS Region or location.
 *             Instance limits control the number of instances, per instance type, per location, that
 *             your AWS account can use. Learn more at <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>. The information
 *             returned includes the maximum number of instances allowed and your account's current
 *             usage across all fleets. This information can affect your ability to scale your GameLift
 *             fleets. You can request a limit increase for your account by using the <b>Service limits</b> page in the GameLift console.</p>
 *         <p>Instance limits differ based on whether the instances are deployed in a fleet's home
 *             Region or in a remote location. For remote locations, limits also differ based on the
 *             combination of home Region and remote location. All  requests must specify an AWS Region
 *             (either explicitly or as your default settings). To get the limit for a remote location,
 *             you must also specify the location. For example, the following requests all return
 *             different results: </p>
 *         <ul>
 *             <li>
 *                 <p>Request specifies the Region <code>ap-northeast-1</code> with no location. The
 *                     result is limits and usage data on all instance types that are deployed in
 *                         <code>us-east-2</code>, by all of the fleets that reside in
 *                         <code>ap-northeast-1</code>. </p>
 *             </li>
 *             <li>
 *                 <p>Request specifies the Region <code>us-east-1</code> with location
 *                         <code>ca-central-1</code>. The result is limits and usage data on all
 *                     instance types that are deployed in <code>ca-central-1</code>, by all of the
 *                     fleets that reside in <code>us-east-2</code>. These limits do not affect fleets
 *                     in any other Regions that deploy instances to <code>ca-central-1</code>.</p>
 *             </li>
 *             <li>
 *                 <p>Request specifies the Region <code>eu-west-1</code> with location
 *                         <code>ca-central-1</code>. The result is limits and usage data on all
 *                     instance types that are deployed in <code>ca-central-1</code>, by all of the
 *                     fleets that reside in <code>eu-west-1</code>.</p>
 *             </li>
 *          </ul>
 *         <p>This operation can be used in the following ways:</p>
 *         <ul>
 *             <li>
 *                 <p>To get limit and usage data for all instance types that are deployed in an AWS
 *                     Region by fleets that reside in the same Region: Specify the Region only.
 *                     Optionally, specify a single instance type to retrieve information for.</p>
 *             </li>
 *             <li>
 *                 <p>To get limit and usage data for all instance types that are deployed to a
 *                     remote location by fleets that reside in different AWS Region: Provide both the
 *                     AWS Region and the remote location. Optionally, specify a single instance type
 *                     to retrieve information for.</p>
 *             </li>
 *          </ul>
 *         <p>If successful, an <code>EC2InstanceLimits</code> object is returned with limits and
 *             usage data for each requested instance type.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift fleets</a>
 *          </p>
 *
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
 * import { GameLiftClient, DescribeEC2InstanceLimitsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeEC2InstanceLimitsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeEC2InstanceLimitsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEC2InstanceLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeEC2InstanceLimitsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEC2InstanceLimitsCommand = /** @class */ (function (_super) {
    __extends(DescribeEC2InstanceLimitsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEC2InstanceLimitsCommand(input) {
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
    DescribeEC2InstanceLimitsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DescribeEC2InstanceLimitsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEC2InstanceLimitsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEC2InstanceLimitsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEC2InstanceLimitsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEC2InstanceLimitsCommand(input, context);
    };
    DescribeEC2InstanceLimitsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEC2InstanceLimitsCommand(output, context);
    };
    return DescribeEC2InstanceLimitsCommand;
}($Command));
export { DescribeEC2InstanceLimitsCommand };
//# sourceMappingURL=DescribeEC2InstanceLimitsCommand.js.map