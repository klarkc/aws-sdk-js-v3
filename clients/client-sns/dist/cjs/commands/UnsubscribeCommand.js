"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsubscribeCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a subscription. If the subscription requires authentication for deletion, only
 *             the owner of the subscription or the topic's owner can unsubscribe, and an AWS signature
 *             is required. If the <code>Unsubscribe</code> call does not require authentication and
 *             the requester is not the subscription owner, a final cancellation message is delivered
 *             to the endpoint, so that the endpoint owner can easily resubscribe to the topic if the
 *                 <code>Unsubscribe</code> request was unintended.</p>
 *         <p>This action is throttled at 100 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, UnsubscribeCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, UnsubscribeCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new UnsubscribeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnsubscribeCommandInput} for command's `input` shape.
 * @see {@link UnsubscribeCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UnsubscribeCommand extends smithy_client_1.Command {
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
        const clientName = "SNSClient";
        const commandName = "UnsubscribeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UnsubscribeInput.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryUnsubscribeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryUnsubscribeCommand(output, context);
    }
}
exports.UnsubscribeCommand = UnsubscribeCommand;
//# sourceMappingURL=UnsubscribeCommand.js.map