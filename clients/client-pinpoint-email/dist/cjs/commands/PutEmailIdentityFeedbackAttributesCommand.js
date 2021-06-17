"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutEmailIdentityFeedbackAttributesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Used to enable or disable feedback forwarding for an identity. This setting determines
 *             what happens when an identity is used to send an email that results in a bounce or
 *             complaint event.</p>
 *         <p>When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce
 *             or complaint events occur. Amazon Pinpoint sends this notification to the address that you
 *             specified in the Return-Path header of the original email.</p>
 *         <p>When you disable feedback forwarding, Amazon Pinpoint sends notifications through other
 *             mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of
 *             tracking bounces and complaints. If you haven't set up another mechanism for receiving
 *             bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events
 *             occur (even if this setting is disabled).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutEmailIdentityFeedbackAttributesCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutEmailIdentityFeedbackAttributesCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new PutEmailIdentityFeedbackAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEmailIdentityFeedbackAttributesCommandInput} for command's `input` shape.
 * @see {@link PutEmailIdentityFeedbackAttributesCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutEmailIdentityFeedbackAttributesCommand extends smithy_client_1.Command {
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
        const clientName = "PinpointEmailClient";
        const commandName = "PutEmailIdentityFeedbackAttributesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutEmailIdentityFeedbackAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutEmailIdentityFeedbackAttributesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand(output, context);
    }
}
exports.PutEmailIdentityFeedbackAttributesCommand = PutEmailIdentityFeedbackAttributesCommand;
//# sourceMappingURL=PutEmailIdentityFeedbackAttributesCommand.js.map