import { __extends } from "tslib";
import { DeleteVirtualInterfaceRequest, DeleteVirtualInterfaceResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteVirtualInterfaceCommand, serializeAws_json1_1DeleteVirtualInterfaceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a virtual interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DeleteVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link DeleteVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVirtualInterfaceCommand = /** @class */ (function (_super) {
    __extends(DeleteVirtualInterfaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVirtualInterfaceCommand(input) {
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
    DeleteVirtualInterfaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DeleteVirtualInterfaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVirtualInterfaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteVirtualInterfaceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVirtualInterfaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteVirtualInterfaceCommand(input, context);
    };
    DeleteVirtualInterfaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteVirtualInterfaceCommand(output, context);
    };
    return DeleteVirtualInterfaceCommand;
}($Command));
export { DeleteVirtualInterfaceCommand };
//# sourceMappingURL=DeleteVirtualInterfaceCommand.js.map