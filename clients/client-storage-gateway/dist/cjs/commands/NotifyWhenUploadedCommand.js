"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifyWhenUploadedCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Sends you notification through CloudWatch Events when all files written to your file
 *          share have been uploaded to Amazon S3.</p>
 *
 *          <p>AWS Storage Gateway can send a notification through Amazon CloudWatch Events when all
 *          files written to your file share up to that point in time have been uploaded to Amazon S3.
 *          These files include files written to the file share up to the time that you make a request
 *          for notification. When the upload is done, Storage Gateway sends you notification through
 *          an Amazon CloudWatch Event. You can configure CloudWatch Events to send the notification
 *          through event targets such as Amazon SNS or AWS Lambda function. This operation is only
 *          supported for file gateways.</p>
 *
 *
 *
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-upload-notification">Getting file upload notification</a> in the <i>AWS Storage Gateway User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, NotifyWhenUploadedCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, NotifyWhenUploadedCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new NotifyWhenUploadedCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NotifyWhenUploadedCommandInput} for command's `input` shape.
 * @see {@link NotifyWhenUploadedCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class NotifyWhenUploadedCommand extends smithy_client_1.Command {
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
        const commandName = "NotifyWhenUploadedCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.NotifyWhenUploadedInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.NotifyWhenUploadedOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1NotifyWhenUploadedCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1NotifyWhenUploadedCommand(output, context);
    }
}
exports.NotifyWhenUploadedCommand = NotifyWhenUploadedCommand;
//# sourceMappingURL=NotifyWhenUploadedCommand.js.map