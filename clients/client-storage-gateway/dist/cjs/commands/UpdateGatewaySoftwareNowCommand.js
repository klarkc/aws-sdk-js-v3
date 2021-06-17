"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGatewaySoftwareNowCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class UpdateGatewaySoftwareNowCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "StorageGatewayClient";
        const commandName = "UpdateGatewaySoftwareNowCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateGatewaySoftwareNowInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateGatewaySoftwareNowOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateGatewaySoftwareNowCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateGatewaySoftwareNowCommand(output, context);
    }
}
exports.UpdateGatewaySoftwareNowCommand = UpdateGatewaySoftwareNowCommand;
//# sourceMappingURL=UpdateGatewaySoftwareNowCommand.js.map