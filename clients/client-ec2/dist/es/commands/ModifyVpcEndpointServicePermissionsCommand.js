import { __extends } from "tslib";
import { ModifyVpcEndpointServicePermissionsRequest, ModifyVpcEndpointServicePermissionsResult, } from "../models/models_4";
import { deserializeAws_ec2ModifyVpcEndpointServicePermissionsCommand, serializeAws_ec2ModifyVpcEndpointServicePermissionsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the permissions for your <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html">VPC endpoint service</a>. You can add or remove permissions for service consumers (IAM users,
 * 	        IAM roles, and AWS accounts) to connect to your endpoint service.</p>
 * 	        <p>If you grant permissions to all principals, the service is public. Any users who know the name of a
 * 	        public service can send a request to attach an endpoint. If the service does not require manual approval,
 * 	        attachments are automatically approved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointServicePermissionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEndpointServicePermissionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpcEndpointServicePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpcEndpointServicePermissionsCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEndpointServicePermissionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyVpcEndpointServicePermissionsCommand = /** @class */ (function (_super) {
    __extends(ModifyVpcEndpointServicePermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyVpcEndpointServicePermissionsCommand(input) {
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
    ModifyVpcEndpointServicePermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyVpcEndpointServicePermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyVpcEndpointServicePermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyVpcEndpointServicePermissionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyVpcEndpointServicePermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyVpcEndpointServicePermissionsCommand(input, context);
    };
    ModifyVpcEndpointServicePermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyVpcEndpointServicePermissionsCommand(output, context);
    };
    return ModifyVpcEndpointServicePermissionsCommand;
}($Command));
export { ModifyVpcEndpointServicePermissionsCommand };
//# sourceMappingURL=ModifyVpcEndpointServicePermissionsCommand.js.map