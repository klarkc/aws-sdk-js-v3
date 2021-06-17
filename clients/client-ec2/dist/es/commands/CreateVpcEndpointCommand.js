import { __extends } from "tslib";
import { CreateVpcEndpointRequest, CreateVpcEndpointResult } from "../models/models_1";
import { deserializeAws_ec2CreateVpcEndpointCommand, serializeAws_ec2CreateVpcEndpointCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a VPC endpoint for a specified service. An endpoint enables you to create a
 *             private connection between your VPC and the service. The service may be provided by AWS,
 *             an AWS Marketplace Partner, or another AWS account. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html">VPC Endpoints</a> in
 *             the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *         <p>A <code>gateway</code> endpoint serves as a target for a route in your route table for
 *             traffic destined for the AWS service. You can specify an endpoint policy to attach to
 *             the endpoint, which will control access to the service from your VPC. You can also
 *             specify the VPC route tables that use the endpoint.</p>
 *         <p>An <code>interface</code> endpoint is a network interface in your subnet that
 *             serves as an endpoint for communicating with the specified service. You can specify the
 *             subnets in which to create an endpoint, and the security groups to associate with the
 *             endpoint network interface.</p>
 *         <p>A <code>GatewayLoadBalancer</code> endpoint is a network interface in your subnet that serves an endpoint for communicating with a Gateway Load Balancer that you've configured as a VPC endpoint service.</p>
 *         <p>Use <a>DescribeVpcEndpointServices</a> to get a list of supported
 *             services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateVpcEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpcEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateVpcEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateVpcEndpointCommand = /** @class */ (function (_super) {
    __extends(CreateVpcEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateVpcEndpointCommand(input) {
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
    CreateVpcEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateVpcEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateVpcEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateVpcEndpointResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateVpcEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateVpcEndpointCommand(input, context);
    };
    CreateVpcEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateVpcEndpointCommand(output, context);
    };
    return CreateVpcEndpointCommand;
}($Command));
export { CreateVpcEndpointCommand };
//# sourceMappingURL=CreateVpcEndpointCommand.js.map