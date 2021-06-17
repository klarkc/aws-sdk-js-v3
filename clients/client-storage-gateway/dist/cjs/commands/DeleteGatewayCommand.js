"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteGatewayCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name
 *          (ARN) of the gateway in your request. The operation deletes the gateway; however, it does
 *          not delete the gateway virtual machine (VM) from your host computer.</p>
 *
 *          <p>After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway
 *          volumes are not deleted upon deleting the gateway, however, pending snapshots will not
 *          complete. After you delete a gateway, your next step is to remove it from your
 *          environment.</p>
 *
 *          <important>
 *             <p>You no longer pay software charges after the gateway is deleted; however, your
 *             existing Amazon EBS snapshots persist and you will continue to be billed for these
 *             snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your
 *             Amazon EC2 subscription.  If you prefer not to cancel your Amazon EC2 subscription, you
 *             can delete your snapshots using the Amazon EC2 console. For more information, see the
 *                <a href="http://aws.amazon.com/storagegateway">AWS Storage Gateway detail
 *             page</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteGatewayCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteGatewayCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteGatewayCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteGatewayInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteGatewayOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteGatewayCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteGatewayCommand(output, context);
    }
}
exports.DeleteGatewayCommand = DeleteGatewayCommand;
//# sourceMappingURL=DeleteGatewayCommand.js.map