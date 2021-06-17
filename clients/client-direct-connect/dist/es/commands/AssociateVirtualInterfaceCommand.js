import { __extends } from "tslib";
import { AssociateVirtualInterfaceRequest, VirtualInterface } from "../models/models_0";
import { deserializeAws_json1_1AssociateVirtualInterfaceCommand, serializeAws_json1_1AssociateVirtualInterfaceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a virtual interface with a specified link aggregation group (LAG) or
 *       connection. Connectivity to AWS is temporarily interrupted as the virtual interface is
 *       being migrated. If the target connection or LAG has an associated virtual interface with
 *       a conflicting VLAN number or a conflicting IP address, the operation fails.</p>
 *          <p>Virtual interfaces associated with a hosted connection cannot be associated with a
 *       LAG; hosted connections must be migrated along with their virtual interfaces using <a>AssociateHostedConnection</a>.</p>
 *          <p>To reassociate a virtual interface to a new connection or LAG, the requester
 *       must own either the virtual interface itself or the connection to which the virtual
 *       interface is currently associated. Additionally, the requester must own the connection
 *       or LAG for the association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AssociateVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AssociateVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AssociateVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link AssociateVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateVirtualInterfaceCommand = /** @class */ (function (_super) {
    __extends(AssociateVirtualInterfaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateVirtualInterfaceCommand(input) {
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
    AssociateVirtualInterfaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "AssociateVirtualInterfaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateVirtualInterfaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: VirtualInterface.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateVirtualInterfaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateVirtualInterfaceCommand(input, context);
    };
    AssociateVirtualInterfaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateVirtualInterfaceCommand(output, context);
    };
    return AssociateVirtualInterfaceCommand;
}($Command));
export { AssociateVirtualInterfaceCommand };
//# sourceMappingURL=AssociateVirtualInterfaceCommand.js.map