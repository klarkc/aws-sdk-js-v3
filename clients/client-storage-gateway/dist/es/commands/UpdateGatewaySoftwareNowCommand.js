import { __extends } from "tslib";
import { UpdateGatewaySoftwareNowInput, UpdateGatewaySoftwareNowOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateGatewaySoftwareNowCommand, serializeAws_json1_1UpdateGatewaySoftwareNowCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the gateway virtual machine (VM) software. The request immediately triggers the
 *          software update.</p>
 *
 *          <note>
 *             <p>When you make this request, you get a <code>200 OK</code> success response
 *             immediately. However, it might take some time for the update to complete. You can call
 *                <a>DescribeGatewayInformation</a> to verify the gateway is in the
 *                <code>STATE_RUNNING</code> state.</p>
 *          </note>
 *
 *          <important>
 *             <p>A software update forces a system restart of your gateway. You can minimize the
 *             chance of any disruption to your applications by increasing your iSCSI Initiators'
 *             timeouts. For more information about increasing iSCSI Initiator timeouts for Windows and
 *             Linux, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorWindowsClient.html#CustomizeWindowsiSCSISettings">Customizing your Windows iSCSI settings</a> and <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorRedHatClient.html#CustomizeLinuxiSCSISettings">Customizing your Linux iSCSI settings</a>, respectively.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateGatewaySoftwareNowCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateGatewaySoftwareNowCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateGatewaySoftwareNowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGatewaySoftwareNowCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewaySoftwareNowCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGatewaySoftwareNowCommand = /** @class */ (function (_super) {
    __extends(UpdateGatewaySoftwareNowCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateGatewaySoftwareNowCommand(input) {
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
    UpdateGatewaySoftwareNowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "UpdateGatewaySoftwareNowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateGatewaySoftwareNowInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateGatewaySoftwareNowOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateGatewaySoftwareNowCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateGatewaySoftwareNowCommand(input, context);
    };
    UpdateGatewaySoftwareNowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateGatewaySoftwareNowCommand(output, context);
    };
    return UpdateGatewaySoftwareNowCommand;
}($Command));
export { UpdateGatewaySoftwareNowCommand };
//# sourceMappingURL=UpdateGatewaySoftwareNowCommand.js.map