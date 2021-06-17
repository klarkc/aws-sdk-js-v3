"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetVaultNotificationsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>This operation configures notifications that will be sent when specific events happen
 *          to a vault. By default, you don't get any notifications.</p>
 *
 *          <p>To configure vault notifications, send a PUT request to the
 *             <code>notification-configuration</code> subresource of the vault. The request should
 *          include a JSON document that provides an Amazon SNS topic and specific events for which you
 *          want Amazon S3 Glacier to send notifications to the topic.</p>
 *
 *          <p>Amazon SNS topics must grant permission to the vault to be allowed to publish
 *          notifications to the topic. You can configure a vault to publish a notification for the
 *          following vault events:</p>
 *
 *          <ul>
 *             <li>
 *                 <p>
 *                   <b>ArchiveRetrievalCompleted</b> This event occurs when a
 *                job that was initiated for an archive retrieval is completed (<a>InitiateJob</a>). The status of the completed job can be "Succeeded" or
 *                "Failed". The notification sent to the SNS topic is the same output as returned from
 *                   <a>DescribeJob</a>. </p>
 *             </li>
 *             <li>
 *
 *                <p>
 *                   <b>InventoryRetrievalCompleted</b> This event occurs when a
 *                job that was initiated for an inventory retrieval is completed (<a>InitiateJob</a>). The status of the completed job can be "Succeeded" or
 *                "Failed". The notification sent to the SNS topic is the same output as returned from
 *                   <a>DescribeJob</a>. </p>
 *             </li>
 *          </ul>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault
 *             Notifications in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-put.html">Set Vault Notification
 *             Configuration </a> in the <i>Amazon Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, SetVaultNotificationsCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, SetVaultNotificationsCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new SetVaultNotificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetVaultNotificationsCommandInput} for command's `input` shape.
 * @see {@link SetVaultNotificationsCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
class SetVaultNotificationsCommand extends smithy_client_1.Command {
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
        const clientName = "GlacierClient";
        const commandName = "SetVaultNotificationsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.SetVaultNotificationsInput.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1SetVaultNotificationsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1SetVaultNotificationsCommand(output, context);
    }
}
exports.SetVaultNotificationsCommand = SetVaultNotificationsCommand;
//# sourceMappingURL=SetVaultNotificationsCommand.js.map