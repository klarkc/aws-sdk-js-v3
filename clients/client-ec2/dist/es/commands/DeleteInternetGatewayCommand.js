import { __extends } from "tslib";
import { DeleteInternetGatewayRequest } from "../models/models_1";
import { deserializeAws_ec2DeleteInternetGatewayCommand, serializeAws_ec2DeleteInternetGatewayCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified internet gateway. You must detach the internet gateway from the
 * 			VPC before you can delete it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteInternetGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteInternetGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteInternetGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInternetGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteInternetGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteInternetGatewayCommand = /** @class */ (function (_super) {
    __extends(DeleteInternetGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteInternetGatewayCommand(input) {
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
    DeleteInternetGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteInternetGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteInternetGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteInternetGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteInternetGatewayCommand(input, context);
    };
    DeleteInternetGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteInternetGatewayCommand(output, context);
    };
    return DeleteInternetGatewayCommand;
}($Command));
export { DeleteInternetGatewayCommand };
//# sourceMappingURL=DeleteInternetGatewayCommand.js.map