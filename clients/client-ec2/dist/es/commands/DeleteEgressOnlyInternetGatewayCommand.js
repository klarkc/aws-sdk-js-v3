import { __extends } from "tslib";
import { DeleteEgressOnlyInternetGatewayRequest, DeleteEgressOnlyInternetGatewayResult } from "../models/models_1";
import { deserializeAws_ec2DeleteEgressOnlyInternetGatewayCommand, serializeAws_ec2DeleteEgressOnlyInternetGatewayCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an egress-only internet gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteEgressOnlyInternetGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteEgressOnlyInternetGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteEgressOnlyInternetGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEgressOnlyInternetGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteEgressOnlyInternetGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEgressOnlyInternetGatewayCommand = /** @class */ (function (_super) {
    __extends(DeleteEgressOnlyInternetGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEgressOnlyInternetGatewayCommand(input) {
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
    DeleteEgressOnlyInternetGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteEgressOnlyInternetGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEgressOnlyInternetGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteEgressOnlyInternetGatewayResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEgressOnlyInternetGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteEgressOnlyInternetGatewayCommand(input, context);
    };
    DeleteEgressOnlyInternetGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteEgressOnlyInternetGatewayCommand(output, context);
    };
    return DeleteEgressOnlyInternetGatewayCommand;
}($Command));
export { DeleteEgressOnlyInternetGatewayCommand };
//# sourceMappingURL=DeleteEgressOnlyInternetGatewayCommand.js.map