import { __extends } from "tslib";
import { AllocatePrivateVirtualInterfaceRequest, VirtualInterface } from "../models/models_0";
import { deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommand, serializeAws_json1_1AllocatePrivateVirtualInterfaceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provisions a private virtual interface to be owned by the specified AWS account.</p>
 *          <p>Virtual interfaces created using this action must be confirmed by the owner using <a>ConfirmPrivateVirtualInterface</a>.
 *       Until then, the virtual interface is in the <code>Confirming</code> state and is not available to handle traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AllocatePrivateVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AllocatePrivateVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AllocatePrivateVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllocatePrivateVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link AllocatePrivateVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AllocatePrivateVirtualInterfaceCommand = /** @class */ (function (_super) {
    __extends(AllocatePrivateVirtualInterfaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AllocatePrivateVirtualInterfaceCommand(input) {
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
    AllocatePrivateVirtualInterfaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "AllocatePrivateVirtualInterfaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AllocatePrivateVirtualInterfaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: VirtualInterface.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AllocatePrivateVirtualInterfaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AllocatePrivateVirtualInterfaceCommand(input, context);
    };
    AllocatePrivateVirtualInterfaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommand(output, context);
    };
    return AllocatePrivateVirtualInterfaceCommand;
}($Command));
export { AllocatePrivateVirtualInterfaceCommand };
//# sourceMappingURL=AllocatePrivateVirtualInterfaceCommand.js.map