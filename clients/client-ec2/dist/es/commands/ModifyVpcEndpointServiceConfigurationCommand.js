import { __extends } from "tslib";
import { ModifyVpcEndpointServiceConfigurationRequest, ModifyVpcEndpointServiceConfigurationResult, } from "../models/models_4";
import { deserializeAws_ec2ModifyVpcEndpointServiceConfigurationCommand, serializeAws_ec2ModifyVpcEndpointServiceConfigurationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the attributes of your VPC endpoint service configuration. You can change the
 *             Network Load Balancers or Gateway Load Balancers for your service, and you can specify whether acceptance is
 *             required for requests to connect to your endpoint service through an interface VPC
 *             endpoint.</p>
 * 	        <p>If you set or modify the private DNS name, you must prove that you own the private DNS
 *             domain name. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-dns-validation.html">VPC Endpoint Service
 *                 Private DNS Name Verification</a> in the
 *             <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointServiceConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEndpointServiceConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpcEndpointServiceConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpcEndpointServiceConfigurationCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEndpointServiceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyVpcEndpointServiceConfigurationCommand = /** @class */ (function (_super) {
    __extends(ModifyVpcEndpointServiceConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyVpcEndpointServiceConfigurationCommand(input) {
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
    ModifyVpcEndpointServiceConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyVpcEndpointServiceConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyVpcEndpointServiceConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyVpcEndpointServiceConfigurationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyVpcEndpointServiceConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyVpcEndpointServiceConfigurationCommand(input, context);
    };
    ModifyVpcEndpointServiceConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyVpcEndpointServiceConfigurationCommand(output, context);
    };
    return ModifyVpcEndpointServiceConfigurationCommand;
}($Command));
export { ModifyVpcEndpointServiceConfigurationCommand };
//# sourceMappingURL=ModifyVpcEndpointServiceConfigurationCommand.js.map