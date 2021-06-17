import { __extends } from "tslib";
import { AllocateTransitVirtualInterfaceRequest, AllocateTransitVirtualInterfaceResult } from "../models/models_0";
import { deserializeAws_json1_1AllocateTransitVirtualInterfaceCommand, serializeAws_json1_1AllocateTransitVirtualInterfaceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provisions a transit virtual interface to be owned by the specified AWS account. Use this type of interface to connect a transit gateway to your Direct Connect gateway.</p>
 *          <p>The owner of a connection provisions a transit virtual interface to be owned by the specified AWS account.</p>
 *          <p>After you create a transit virtual interface, it must be confirmed by the owner using <a>ConfirmTransitVirtualInterface</a>. Until this step has been completed, the transit virtual interface is in the <code>requested</code> state and is not available to handle traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AllocateTransitVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AllocateTransitVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AllocateTransitVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllocateTransitVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link AllocateTransitVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AllocateTransitVirtualInterfaceCommand = /** @class */ (function (_super) {
    __extends(AllocateTransitVirtualInterfaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AllocateTransitVirtualInterfaceCommand(input) {
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
    AllocateTransitVirtualInterfaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "AllocateTransitVirtualInterfaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AllocateTransitVirtualInterfaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AllocateTransitVirtualInterfaceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AllocateTransitVirtualInterfaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AllocateTransitVirtualInterfaceCommand(input, context);
    };
    AllocateTransitVirtualInterfaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AllocateTransitVirtualInterfaceCommand(output, context);
    };
    return AllocateTransitVirtualInterfaceCommand;
}($Command));
export { AllocateTransitVirtualInterfaceCommand };
//# sourceMappingURL=AllocateTransitVirtualInterfaceCommand.js.map