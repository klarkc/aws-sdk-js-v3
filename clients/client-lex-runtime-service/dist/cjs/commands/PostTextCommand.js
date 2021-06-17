"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostTextCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Sends user input to Amazon Lex. Client applications can use this API to
 *       send requests to Amazon Lex at runtime. Amazon Lex then interprets the user input
 *       using the machine learning model it built for the bot. </p>
 *          <p> In response, Amazon Lex returns the next <code>message</code> to convey to
 *       the user an optional <code>responseCard</code> to display. Consider the
 *       following example messages: </p>
 *          <ul>
 *             <li>
 *                <p> For a user input "I would like a pizza", Amazon Lex might return a
 *           response with a message eliciting slot data (for example, PizzaSize):
 *           "What size pizza would you like?" </p>
 *             </li>
 *             <li>
 *                <p> After the user provides all of the pizza order information,
 *           Amazon Lex might return a response with a message to obtain user
 *           confirmation "Proceed with the pizza order?". </p>
 *             </li>
 *             <li>
 *                <p> After the user replies to a confirmation prompt with a "yes",
 *           Amazon Lex might return a conclusion statement: "Thank you, your cheese
 *           pizza has been ordered.". </p>
 *             </li>
 *          </ul>
 *
 *          <p> Not all Amazon Lex messages require a user response. For example, a
 *       conclusion statement does not require a response. Some messages require
 *       only a "yes" or "no" user response. In addition to the
 *         <code>message</code>, Amazon Lex provides additional context about the
 *       message in the response that you might use to enhance client behavior, for
 *       example, to display the appropriate client user interface. These are the
 *         <code>slotToElicit</code>, <code>dialogState</code>,
 *         <code>intentName</code>, and <code>slots</code> fields in the response.
 *       Consider the following examples: </p>
 *
 *          <ul>
 *             <li>
 *                <p>If the message is to elicit slot data, Amazon Lex returns the
 *           following context information:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>dialogState</code> set to ElicitSlot </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>intentName</code> set to the intent name in the current
 *               context </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>slotToElicit</code> set to the slot name for which the
 *                 <code>message</code> is eliciting information </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>slots</code> set to a map of slots, configured for the
 *               intent, with currently known values </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p> If the message is a confirmation prompt, the
 *             <code>dialogState</code> is set to ConfirmIntent and
 *             <code>SlotToElicit</code> is set to null. </p>
 *             </li>
 *             <li>
 *                <p>If the message is a clarification prompt (configured for the
 *           intent) that indicates that user intent is not understood, the
 *             <code>dialogState</code> is set to ElicitIntent and
 *             <code>slotToElicit</code> is set to null. </p>
 *             </li>
 *          </ul>
 *
 *          <p> In addition, Amazon Lex also returns your application-specific
 *         <code>sessionAttributes</code>. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing
 *         Conversation Context</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeServiceClient, PostTextCommand } from "@aws-sdk/client-lex-runtime-service"; // ES Modules import
 * // const { LexRuntimeServiceClient, PostTextCommand } = require("@aws-sdk/client-lex-runtime-service"); // CommonJS import
 * const client = new LexRuntimeServiceClient(config);
 * const command = new PostTextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PostTextCommandInput} for command's `input` shape.
 * @see {@link PostTextCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PostTextCommand extends smithy_client_1.Command {
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
        const clientName = "LexRuntimeServiceClient";
        const commandName = "PostTextCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PostTextRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PostTextResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1PostTextCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1PostTextCommand(output, context);
    }
}
exports.PostTextCommand = PostTextCommand;
//# sourceMappingURL=PostTextCommand.js.map