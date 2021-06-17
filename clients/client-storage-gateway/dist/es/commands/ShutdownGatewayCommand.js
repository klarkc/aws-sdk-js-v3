import { __extends } from "tslib";
import { ShutdownGatewayInput, ShutdownGatewayOutput } from "../models/models_0";
import { deserializeAws_json1_1ShutdownGatewayCommand, serializeAws_json1_1ShutdownGatewayCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Shuts down a gateway. To specify which gateway to shut down, use the Amazon Resource
 *          Name (ARN) of the gateway in the body of your request.</p>
 *
 *          <p>The operation shuts down the gateway service component running in the gateway's
 *          virtual machine (VM) and not the host VM.</p>
 *
 *          <note>
 *             <p>If you want to shut down the VM, it is recommended that you first shut down the
 *             gateway component in the VM to avoid unpredictable conditions.</p>
 *          </note>
 *
 *          <p>After the gateway is shutdown, you cannot call any other API except <a>StartGateway</a>, <a>DescribeGatewayInformation</a>, and <a>ListGateways</a>. For more information, see <a>ActivateGateway</a>.
 *          Your applications cannot read from or write to the gateway's storage volumes, and
 *          there are no snapshots taken.</p>
 *
 *          <note>
 *             <p>When you make a shutdown request, you will get a <code>200 OK</code> success response
 *             immediately. However, it might take some time for the gateway to shut down. You can call
 *             the <a>DescribeGatewayInformation</a> API to check the status. For more
 *             information, see <a>ActivateGateway</a>.</p>
 *          </note>
 *
 *          <p>If do not intend to use the gateway again, you must delete the gateway (using <a>DeleteGateway</a>) to no longer pay software charges associated with the
 *          gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ShutdownGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ShutdownGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ShutdownGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ShutdownGatewayCommandInput} for command's `input` shape.
 * @see {@link ShutdownGatewayCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ShutdownGatewayCommand = /** @class */ (function (_super) {
    __extends(ShutdownGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ShutdownGatewayCommand(input) {
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
    ShutdownGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "ShutdownGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ShutdownGatewayInput.filterSensitiveLog,
            outputFilterSensitiveLog: ShutdownGatewayOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ShutdownGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ShutdownGatewayCommand(input, context);
    };
    ShutdownGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ShutdownGatewayCommand(output, context);
    };
    return ShutdownGatewayCommand;
}($Command));
export { ShutdownGatewayCommand };
//# sourceMappingURL=ShutdownGatewayCommand.js.map