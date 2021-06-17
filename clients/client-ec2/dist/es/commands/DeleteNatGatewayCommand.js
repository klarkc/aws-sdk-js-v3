import { __extends } from "tslib";
import { DeleteNatGatewayRequest, DeleteNatGatewayResult } from "../models/models_2";
import { deserializeAws_ec2DeleteNatGatewayCommand, serializeAws_ec2DeleteNatGatewayCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified NAT gateway. Deleting a NAT gateway disassociates its Elastic IP address, but does not release the address from your account. Deleting a NAT gateway does not delete any NAT gateway routes in your route tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNatGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNatGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteNatGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNatGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteNatGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteNatGatewayCommand = /** @class */ (function (_super) {
    __extends(DeleteNatGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteNatGatewayCommand(input) {
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
    DeleteNatGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteNatGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteNatGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteNatGatewayResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteNatGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteNatGatewayCommand(input, context);
    };
    DeleteNatGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteNatGatewayCommand(output, context);
    };
    return DeleteNatGatewayCommand;
}($Command));
export { DeleteNatGatewayCommand };
//# sourceMappingURL=DeleteNatGatewayCommand.js.map