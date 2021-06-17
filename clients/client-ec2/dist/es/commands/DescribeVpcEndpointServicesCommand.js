import { __extends } from "tslib";
import { DescribeVpcEndpointServicesRequest, DescribeVpcEndpointServicesResult } from "../models/models_3";
import { deserializeAws_ec2DescribeVpcEndpointServicesCommand, serializeAws_ec2DescribeVpcEndpointServicesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes available services to which you can create a VPC endpoint.</p>
 *         <p>When the service provider and the consumer have different accounts in multiple
 *             Availability Zones, and the consumer views the VPC endpoint service information, the
 *             response only includes the common Availability Zones. For example, when the service
 *             provider account uses <code>us-east-1a</code> and <code>us-east-1c</code> and the
 *             consumer uses <code>us-east-1a</code> and <code>us-east-1b</code>, the response includes
 *             the VPC endpoint services in the common Availability Zone,
 *             <code>us-east-1a</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointServicesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointServicesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpcEndpointServicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcEndpointServicesCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointServicesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVpcEndpointServicesCommand = /** @class */ (function (_super) {
    __extends(DescribeVpcEndpointServicesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVpcEndpointServicesCommand(input) {
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
    DescribeVpcEndpointServicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeVpcEndpointServicesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVpcEndpointServicesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeVpcEndpointServicesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVpcEndpointServicesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeVpcEndpointServicesCommand(input, context);
    };
    DescribeVpcEndpointServicesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeVpcEndpointServicesCommand(output, context);
    };
    return DescribeVpcEndpointServicesCommand;
}($Command));
export { DescribeVpcEndpointServicesCommand };
//# sourceMappingURL=DescribeVpcEndpointServicesCommand.js.map