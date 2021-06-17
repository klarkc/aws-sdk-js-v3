import { __extends } from "tslib";
import { DescribeAvailabilityZonesRequest, DescribeAvailabilityZonesResult } from "../models/models_2";
import { deserializeAws_ec2DescribeAvailabilityZonesCommand, serializeAws_ec2DescribeAvailabilityZonesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the Availability Zones, Local Zones, and Wavelength Zones that are available to
 *       you. If there is an event impacting a zone, you can use this request to view the state and any
 *       provided messages for that zone.</p>
 *          <p>For more information about Availability Zones, Local Zones, and Wavelength Zones, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html">Regions, Zones and
 *         Outposts</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAvailabilityZonesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAvailabilityZonesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeAvailabilityZonesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAvailabilityZonesCommandInput} for command's `input` shape.
 * @see {@link DescribeAvailabilityZonesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAvailabilityZonesCommand = /** @class */ (function (_super) {
    __extends(DescribeAvailabilityZonesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAvailabilityZonesCommand(input) {
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
    DescribeAvailabilityZonesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeAvailabilityZonesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAvailabilityZonesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAvailabilityZonesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAvailabilityZonesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeAvailabilityZonesCommand(input, context);
    };
    DescribeAvailabilityZonesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeAvailabilityZonesCommand(output, context);
    };
    return DescribeAvailabilityZonesCommand;
}($Command));
export { DescribeAvailabilityZonesCommand };
//# sourceMappingURL=DescribeAvailabilityZonesCommand.js.map