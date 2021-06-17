import { __extends } from "tslib";
import { UpdateVirtualInterfaceAttributesRequest, VirtualInterface } from "../models/models_0";
import { deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommand, serializeAws_json1_1UpdateVirtualInterfaceAttributesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified attributes of the specified virtual private interface.</p>
 *          <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to
 *       the underlying physical connection if it wasn't updated to support jumbo frames. Updating
 *       the connection disrupts network connectivity for all virtual interfaces associated with
 *       the connection for up to 30 seconds. To check whether your connection supports jumbo
 *       frames, call <a>DescribeConnections</a>. To check whether your virtual q
 *       interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, UpdateVirtualInterfaceAttributesCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, UpdateVirtualInterfaceAttributesCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new UpdateVirtualInterfaceAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVirtualInterfaceAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateVirtualInterfaceAttributesCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateVirtualInterfaceAttributesCommand = /** @class */ (function (_super) {
    __extends(UpdateVirtualInterfaceAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateVirtualInterfaceAttributesCommand(input) {
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
    UpdateVirtualInterfaceAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "UpdateVirtualInterfaceAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateVirtualInterfaceAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: VirtualInterface.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateVirtualInterfaceAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateVirtualInterfaceAttributesCommand(input, context);
    };
    UpdateVirtualInterfaceAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommand(output, context);
    };
    return UpdateVirtualInterfaceAttributesCommand;
}($Command));
export { UpdateVirtualInterfaceAttributesCommand };
//# sourceMappingURL=UpdateVirtualInterfaceAttributesCommand.js.map