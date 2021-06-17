import { __extends } from "tslib";
import { CreateTransitVirtualInterfaceRequest, CreateTransitVirtualInterfaceResult } from "../models/models_0";
import { deserializeAws_json1_1CreateTransitVirtualInterfaceCommand, serializeAws_json1_1CreateTransitVirtualInterfaceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect gateway.</p>
 *          <important>
 *             <p>If you associate your transit gateway with one or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit gateway and Direct Connect gateway, the association request fails.</p>
 *          </important>
 *          <p>Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to
 *       the underlying physical connection if it wasn't updated to support jumbo frames. Updating
 *       the connection disrupts network connectivity for all virtual interfaces associated with
 *       the connection for up to 30 seconds. To check whether your connection supports jumbo
 *       frames, call <a>DescribeConnections</a>. To check whether your virtual
 *       interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateTransitVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateTransitVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new CreateTransitVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link CreateTransitVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTransitVirtualInterfaceCommand = /** @class */ (function (_super) {
    __extends(CreateTransitVirtualInterfaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTransitVirtualInterfaceCommand(input) {
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
    CreateTransitVirtualInterfaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "CreateTransitVirtualInterfaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTransitVirtualInterfaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTransitVirtualInterfaceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTransitVirtualInterfaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateTransitVirtualInterfaceCommand(input, context);
    };
    CreateTransitVirtualInterfaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateTransitVirtualInterfaceCommand(output, context);
    };
    return CreateTransitVirtualInterfaceCommand;
}($Command));
export { CreateTransitVirtualInterfaceCommand };
//# sourceMappingURL=CreateTransitVirtualInterfaceCommand.js.map