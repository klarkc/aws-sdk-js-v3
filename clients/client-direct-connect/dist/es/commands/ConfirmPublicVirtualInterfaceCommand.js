import { __extends } from "tslib";
import { ConfirmPublicVirtualInterfaceRequest, ConfirmPublicVirtualInterfaceResponse } from "../models/models_0";
import { deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommand, serializeAws_json1_1ConfirmPublicVirtualInterfaceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts ownership of a public virtual interface created by another AWS account.</p>
 *          <p>After the virtual interface owner makes this call, the specified virtual interface is
 *       created and made available to handle traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ConfirmPublicVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ConfirmPublicVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new ConfirmPublicVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmPublicVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link ConfirmPublicVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ConfirmPublicVirtualInterfaceCommand = /** @class */ (function (_super) {
    __extends(ConfirmPublicVirtualInterfaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ConfirmPublicVirtualInterfaceCommand(input) {
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
    ConfirmPublicVirtualInterfaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "ConfirmPublicVirtualInterfaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ConfirmPublicVirtualInterfaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ConfirmPublicVirtualInterfaceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ConfirmPublicVirtualInterfaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ConfirmPublicVirtualInterfaceCommand(input, context);
    };
    ConfirmPublicVirtualInterfaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommand(output, context);
    };
    return ConfirmPublicVirtualInterfaceCommand;
}($Command));
export { ConfirmPublicVirtualInterfaceCommand };
//# sourceMappingURL=ConfirmPublicVirtualInterfaceCommand.js.map