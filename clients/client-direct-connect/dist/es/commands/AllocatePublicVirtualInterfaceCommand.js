import { __extends } from "tslib";
import { AllocatePublicVirtualInterfaceRequest, VirtualInterface } from "../models/models_0";
import { deserializeAws_json1_1AllocatePublicVirtualInterfaceCommand, serializeAws_json1_1AllocatePublicVirtualInterfaceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provisions a public virtual interface to be owned by the specified AWS account.</p>
 *          <p>The owner of a connection calls this function to provision a public virtual interface to be owned by the specified AWS account.</p>
 *          <p>Virtual interfaces created using this function must be confirmed by the owner using <a>ConfirmPublicVirtualInterface</a>.
 *       Until this step has been completed, the virtual interface is in the <code>confirming</code> state and is not available to handle traffic.</p>
 *          <p>When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from
 *       the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AllocatePublicVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AllocatePublicVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AllocatePublicVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllocatePublicVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link AllocatePublicVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AllocatePublicVirtualInterfaceCommand = /** @class */ (function (_super) {
    __extends(AllocatePublicVirtualInterfaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AllocatePublicVirtualInterfaceCommand(input) {
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
    AllocatePublicVirtualInterfaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "AllocatePublicVirtualInterfaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AllocatePublicVirtualInterfaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: VirtualInterface.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AllocatePublicVirtualInterfaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AllocatePublicVirtualInterfaceCommand(input, context);
    };
    AllocatePublicVirtualInterfaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AllocatePublicVirtualInterfaceCommand(output, context);
    };
    return AllocatePublicVirtualInterfaceCommand;
}($Command));
export { AllocatePublicVirtualInterfaceCommand };
//# sourceMappingURL=AllocatePublicVirtualInterfaceCommand.js.map