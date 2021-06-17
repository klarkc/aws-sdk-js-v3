import { __extends } from "tslib";
import { DeleteCustomerGatewayRequest } from "../models/models_1";
import { deserializeAws_ec2DeleteCustomerGatewayCommand, serializeAws_ec2DeleteCustomerGatewayCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified customer gateway. You must delete the VPN connection before you can delete the customer gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteCustomerGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteCustomerGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteCustomerGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomerGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomerGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCustomerGatewayCommand = /** @class */ (function (_super) {
    __extends(DeleteCustomerGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCustomerGatewayCommand(input) {
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
    DeleteCustomerGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteCustomerGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCustomerGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCustomerGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteCustomerGatewayCommand(input, context);
    };
    DeleteCustomerGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteCustomerGatewayCommand(output, context);
    };
    return DeleteCustomerGatewayCommand;
}($Command));
export { DeleteCustomerGatewayCommand };
//# sourceMappingURL=DeleteCustomerGatewayCommand.js.map