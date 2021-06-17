import { __extends } from "tslib";
import { CreatePublicVirtualInterfaceRequest, VirtualInterface } from "../models/models_0";
import { deserializeAws_json1_1CreatePublicVirtualInterfaceCommand, serializeAws_json1_1CreatePublicVirtualInterfaceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a public virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic.
 *       A public virtual interface supports sending traffic to public services of AWS such as Amazon S3.</p>
 *          <p>When creating an IPv6 public virtual interface (<code>addressFamily</code> is <code>ipv6</code>), leave the <code>customer</code>
 *       and <code>amazon</code> address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreatePublicVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreatePublicVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new CreatePublicVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePublicVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link CreatePublicVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePublicVirtualInterfaceCommand = /** @class */ (function (_super) {
    __extends(CreatePublicVirtualInterfaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePublicVirtualInterfaceCommand(input) {
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
    CreatePublicVirtualInterfaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "CreatePublicVirtualInterfaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePublicVirtualInterfaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: VirtualInterface.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePublicVirtualInterfaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreatePublicVirtualInterfaceCommand(input, context);
    };
    CreatePublicVirtualInterfaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreatePublicVirtualInterfaceCommand(output, context);
    };
    return CreatePublicVirtualInterfaceCommand;
}($Command));
export { CreatePublicVirtualInterfaceCommand };
//# sourceMappingURL=CreatePublicVirtualInterfaceCommand.js.map