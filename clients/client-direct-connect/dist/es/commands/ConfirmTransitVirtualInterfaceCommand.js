import { __extends } from "tslib";
import { ConfirmTransitVirtualInterfaceRequest, ConfirmTransitVirtualInterfaceResponse } from "../models/models_0";
import { deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommand, serializeAws_json1_1ConfirmTransitVirtualInterfaceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts ownership of a transit virtual interface created by another AWS account.</p>
 *
 *          <p> After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ConfirmTransitVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ConfirmTransitVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new ConfirmTransitVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmTransitVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link ConfirmTransitVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ConfirmTransitVirtualInterfaceCommand = /** @class */ (function (_super) {
    __extends(ConfirmTransitVirtualInterfaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ConfirmTransitVirtualInterfaceCommand(input) {
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
    ConfirmTransitVirtualInterfaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "ConfirmTransitVirtualInterfaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ConfirmTransitVirtualInterfaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ConfirmTransitVirtualInterfaceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ConfirmTransitVirtualInterfaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ConfirmTransitVirtualInterfaceCommand(input, context);
    };
    ConfirmTransitVirtualInterfaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommand(output, context);
    };
    return ConfirmTransitVirtualInterfaceCommand;
}($Command));
export { ConfirmTransitVirtualInterfaceCommand };
//# sourceMappingURL=ConfirmTransitVirtualInterfaceCommand.js.map