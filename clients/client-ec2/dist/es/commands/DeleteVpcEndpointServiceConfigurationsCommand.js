import { __extends } from "tslib";
import { DeleteVpcEndpointServiceConfigurationsRequest, DeleteVpcEndpointServiceConfigurationsResult, } from "../models/models_2";
import { deserializeAws_ec2DeleteVpcEndpointServiceConfigurationsCommand, serializeAws_ec2DeleteVpcEndpointServiceConfigurationsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes one or more VPC endpoint service configurations in your account. Before you
 *             delete the endpoint service configuration, you must reject any <code>Available</code> or
 *                 <code>PendingAcceptance</code> interface endpoint connections that are attached to
 *             the service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpcEndpointServiceConfigurationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpcEndpointServiceConfigurationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteVpcEndpointServiceConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpcEndpointServiceConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcEndpointServiceConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVpcEndpointServiceConfigurationsCommand = /** @class */ (function (_super) {
    __extends(DeleteVpcEndpointServiceConfigurationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVpcEndpointServiceConfigurationsCommand(input) {
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
    DeleteVpcEndpointServiceConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteVpcEndpointServiceConfigurationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVpcEndpointServiceConfigurationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteVpcEndpointServiceConfigurationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVpcEndpointServiceConfigurationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteVpcEndpointServiceConfigurationsCommand(input, context);
    };
    DeleteVpcEndpointServiceConfigurationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteVpcEndpointServiceConfigurationsCommand(output, context);
    };
    return DeleteVpcEndpointServiceConfigurationsCommand;
}($Command));
export { DeleteVpcEndpointServiceConfigurationsCommand };
//# sourceMappingURL=DeleteVpcEndpointServiceConfigurationsCommand.js.map