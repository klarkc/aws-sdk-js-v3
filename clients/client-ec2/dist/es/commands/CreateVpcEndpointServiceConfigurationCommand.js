import { __extends } from "tslib";
import { CreateVpcEndpointServiceConfigurationRequest, CreateVpcEndpointServiceConfigurationResult, } from "../models/models_1";
import { deserializeAws_ec2CreateVpcEndpointServiceConfigurationCommand, serializeAws_ec2CreateVpcEndpointServiceConfigurationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a VPC endpoint service configuration to which service consumers (AWS accounts,
 *             IAM users, and IAM roles) can connect.</p>
 *         <p>To create an endpoint service configuration, you must first create one of the
 *             following for your service:</p>
 *         <ul>
 *             <li>
 *                 <p>A <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html">Network Load Balancer</a>. Service consumers connect to your service using an
 *                     interface endpoint.</p>
 *             </li>
 *             <li>
 *                 <p>A <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/introduction.html">Gateway Load Balancer</a>. Service consumers connect to your service using a
 *                     Gateway Load Balancer endpoint.</p>
 *             </li>
 *          </ul>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html">VPC Endpoint Services</a> in the
 *                 <i>Amazon Virtual Private Cloud User Guide</i>. </p>
 *         <p>If you set the private DNS name, you must prove that you own the private DNS domain
 *             name. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-dns-validation.html">VPC Endpoint Service
 *                 Private DNS Name Verification</a> in the
 *             <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcEndpointServiceConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcEndpointServiceConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateVpcEndpointServiceConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpcEndpointServiceConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateVpcEndpointServiceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateVpcEndpointServiceConfigurationCommand = /** @class */ (function (_super) {
    __extends(CreateVpcEndpointServiceConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateVpcEndpointServiceConfigurationCommand(input) {
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
    CreateVpcEndpointServiceConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateVpcEndpointServiceConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateVpcEndpointServiceConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateVpcEndpointServiceConfigurationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateVpcEndpointServiceConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateVpcEndpointServiceConfigurationCommand(input, context);
    };
    CreateVpcEndpointServiceConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateVpcEndpointServiceConfigurationCommand(output, context);
    };
    return CreateVpcEndpointServiceConfigurationCommand;
}($Command));
export { CreateVpcEndpointServiceConfigurationCommand };
//# sourceMappingURL=CreateVpcEndpointServiceConfigurationCommand.js.map