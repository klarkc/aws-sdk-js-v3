import { __extends } from "tslib";
import { ConfirmPrivateVirtualInterfaceRequest, ConfirmPrivateVirtualInterfaceResponse } from "../models/models_0";
import { deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand, serializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts ownership of a private virtual interface created by another AWS account.</p>
 *          <p>After the virtual interface owner makes this call, the virtual interface is
 *       created and attached to the specified virtual private gateway or Direct Connect gateway, and is
 *       made available to handle traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ConfirmPrivateVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ConfirmPrivateVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new ConfirmPrivateVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmPrivateVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link ConfirmPrivateVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ConfirmPrivateVirtualInterfaceCommand = /** @class */ (function (_super) {
    __extends(ConfirmPrivateVirtualInterfaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ConfirmPrivateVirtualInterfaceCommand(input) {
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
    ConfirmPrivateVirtualInterfaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "ConfirmPrivateVirtualInterfaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ConfirmPrivateVirtualInterfaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ConfirmPrivateVirtualInterfaceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ConfirmPrivateVirtualInterfaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand(input, context);
    };
    ConfirmPrivateVirtualInterfaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand(output, context);
    };
    return ConfirmPrivateVirtualInterfaceCommand;
}($Command));
export { ConfirmPrivateVirtualInterfaceCommand };
//# sourceMappingURL=ConfirmPrivateVirtualInterfaceCommand.js.map