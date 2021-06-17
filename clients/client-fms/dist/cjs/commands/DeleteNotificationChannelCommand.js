"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteNotificationChannelCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes an AWS Firewall Manager association with the IAM role and the Amazon Simple
 *       Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, DeleteNotificationChannelCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, DeleteNotificationChannelCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new DeleteNotificationChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNotificationChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationChannelCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteNotificationChannelCommand extends smithy_client_1.Command {
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
        const clientName = "FMSClient";
        const commandName = "DeleteNotificationChannelCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteNotificationChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteNotificationChannelCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteNotificationChannelCommand(output, context);
    }
}
exports.DeleteNotificationChannelCommand = DeleteNotificationChannelCommand;
//# sourceMappingURL=DeleteNotificationChannelCommand.js.map