"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVpcEndpointCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreateVpcEndpointCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "EC2Client";
        const commandName = "CreateVpcEndpointCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.CreateVpcEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.CreateVpcEndpointResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2CreateVpcEndpointCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2CreateVpcEndpointCommand(output, context);
    }
}
exports.CreateVpcEndpointCommand = CreateVpcEndpointCommand;
//# sourceMappingURL=CreateVpcEndpointCommand.js.map