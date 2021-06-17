"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendContactMethodVerificationCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Sends a verification request to an email contact method to ensure it's owned by the
 *       requester. SMS contact methods don't need to be verified.</p>
 *          <p>A contact method is used to send you notifications about your Amazon Lightsail resources.
 *       You can add one email address and one mobile phone number contact method in each AWS Region.
 *       However, SMS text messaging is not supported in some AWS Regions, and SMS text messages
 *       cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
 *          <p>A verification request is sent to the contact method when you initially create it. Use
 *       this action to send another verification request if a previous verification request was
 *       deleted, or has expired.</p>
 *          <important>
 *             <p>Notifications are not sent to an email contact method until after it is verified, and
 *         confirmed as valid.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, SendContactMethodVerificationCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, SendContactMethodVerificationCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new SendContactMethodVerificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendContactMethodVerificationCommandInput} for command's `input` shape.
 * @see {@link SendContactMethodVerificationCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
class SendContactMethodVerificationCommand extends smithy_client_1.Command {
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
        const clientName = "LightsailClient";
        const commandName = "SendContactMethodVerificationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.SendContactMethodVerificationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.SendContactMethodVerificationResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1SendContactMethodVerificationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1SendContactMethodVerificationCommand(output, context);
    }
}
exports.SendContactMethodVerificationCommand = SendContactMethodVerificationCommand;
//# sourceMappingURL=SendContactMethodVerificationCommand.js.map