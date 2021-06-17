"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckIfPhoneNumberIsOptedOutCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Accepts a phone number and indicates whether the phone holder has opted out of
 *             receiving SMS messages from your account. You cannot send SMS messages to a number that
 *             is opted out.</p>
 *         <p>To resume sending messages, you can opt in the number by using the
 *                 <code>OptInPhoneNumber</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, CheckIfPhoneNumberIsOptedOutCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, CheckIfPhoneNumberIsOptedOutCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new CheckIfPhoneNumberIsOptedOutCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckIfPhoneNumberIsOptedOutCommandInput} for command's `input` shape.
 * @see {@link CheckIfPhoneNumberIsOptedOutCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CheckIfPhoneNumberIsOptedOutCommand extends smithy_client_1.Command {
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
        const commandName = "CheckIfPhoneNumberIsOptedOutCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CheckIfPhoneNumberIsOptedOutInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CheckIfPhoneNumberIsOptedOutResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCheckIfPhoneNumberIsOptedOutCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommand(output, context);
    }
}
exports.CheckIfPhoneNumberIsOptedOutCommand = CheckIfPhoneNumberIsOptedOutCommand;
//# sourceMappingURL=CheckIfPhoneNumberIsOptedOutCommand.js.map