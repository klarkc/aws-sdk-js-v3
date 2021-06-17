import { __extends } from "tslib";
import { CreatePrivateVirtualInterfaceRequest, VirtualInterface } from "../models/models_0";
import { deserializeAws_json1_1CreatePrivateVirtualInterfaceCommand, serializeAws_json1_1CreatePrivateVirtualInterfaceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a private virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic.
 *       A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW).
 *       Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple
 *       VPCs, including VPCs in different AWS Regions. Connecting the private virtual interface to a VGW only
 *       provides access to a single VPC within the same Region.</p>
 *          <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to
 *       the underlying physical connection if it wasn't updated to support jumbo frames. Updating
 *       the connection disrupts network connectivity for all virtual interfaces associated with
 *       the connection for up to 30 seconds. To check whether your connection supports jumbo
 *       frames, call <a>DescribeConnections</a>. To check whether your virtual
 *       interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreatePrivateVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreatePrivateVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new CreatePrivateVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePrivateVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link CreatePrivateVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePrivateVirtualInterfaceCommand = /** @class */ (function (_super) {
    __extends(CreatePrivateVirtualInterfaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePrivateVirtualInterfaceCommand(input) {
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
    CreatePrivateVirtualInterfaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "CreatePrivateVirtualInterfaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePrivateVirtualInterfaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: VirtualInterface.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePrivateVirtualInterfaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreatePrivateVirtualInterfaceCommand(input, context);
    };
    CreatePrivateVirtualInterfaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreatePrivateVirtualInterfaceCommand(output, context);
    };
    return CreatePrivateVirtualInterfaceCommand;
}($Command));
export { CreatePrivateVirtualInterfaceCommand };
//# sourceMappingURL=CreatePrivateVirtualInterfaceCommand.js.map