import { __extends } from "tslib";
import { RequestSpotFleetRequest, RequestSpotFleetResponse } from "../models/models_5";
import { deserializeAws_ec2RequestSpotFleetCommand, serializeAws_ec2RequestSpotFleetCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Spot Fleet request.</p>
 *         <p>The Spot Fleet request specifies the total target capacity and the On-Demand target
 *             capacity. Amazon EC2 calculates the difference between the total capacity and On-Demand
 *             capacity, and launches the difference as Spot capacity.</p>
 *          <p>You can submit a single request that includes multiple launch specifications that vary by instance type, AMI, Availability Zone, or subnet.</p>
 *          <p>By default, the Spot Fleet requests Spot Instances in the Spot Instance pool where the
 *             price per unit is the lowest. Each launch specification can include its own instance
 *             weighting that reflects the value of the instance type to your application
 *             workload.</p>
 *          <p>Alternatively, you can specify that the Spot Fleet distribute the target capacity across the Spot pools included in its launch specifications. By ensuring that the Spot Instances in your Spot Fleet are in different Spot pools, you can improve the availability of your fleet.</p>
 *          <p>You can specify tags for the Spot Fleet request and instances launched by the fleet. You
 *             cannot tag other resource types in a Spot Fleet request because only the
 *                 <code>spot-fleet-request</code> and <code>instance</code> resource types are
 *             supported.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-requests.html">Spot Fleet requests</a>
 *        in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RequestSpotFleetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RequestSpotFleetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RequestSpotFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RequestSpotFleetCommandInput} for command's `input` shape.
 * @see {@link RequestSpotFleetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RequestSpotFleetCommand = /** @class */ (function (_super) {
    __extends(RequestSpotFleetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RequestSpotFleetCommand(input) {
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
    RequestSpotFleetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "RequestSpotFleetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RequestSpotFleetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RequestSpotFleetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RequestSpotFleetCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2RequestSpotFleetCommand(input, context);
    };
    RequestSpotFleetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2RequestSpotFleetCommand(output, context);
    };
    return RequestSpotFleetCommand;
}($Command));
export { RequestSpotFleetCommand };
//# sourceMappingURL=RequestSpotFleetCommand.js.map