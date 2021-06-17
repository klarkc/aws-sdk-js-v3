import { __extends } from "tslib";
import { PostContentRequest, PostContentResponse } from "../models/models_0";
import { deserializeAws_restJson1PostContentCommand, serializeAws_restJson1PostContentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Sends user input (text or speech) to Amazon Lex. Clients use this API to
 *       send text and audio requests to Amazon Lex at runtime. Amazon Lex interprets the
 *       user input using the machine learning model that it built for the bot. </p>
 *          <p>The <code>PostContent</code> operation supports audio input at 8kHz
 *       and 16kHz. You can use 8kHz audio to achieve higher speech recognition
 *       accuracy in telephone audio applications. </p>
 *          <p> In response, Amazon Lex returns the next message to convey to the user.
 *       Consider the following example messages: </p>
 *          <ul>
 *             <li>
 *                <p> For a user input "I would like a pizza," Amazon Lex might return a
 *           response with a message eliciting slot data (for example,
 *             <code>PizzaSize</code>): "What size pizza would you like?". </p>
 *             </li>
 *             <li>
 *                <p> After the user provides all of the pizza order information, Amazon Lex
 *           might return a response with a message to get user confirmation:
 *           "Order the pizza?". </p>
 *             </li>
 *             <li>
 *                <p> After the user replies "Yes" to the confirmation prompt, Amazon Lex
 *           might return a conclusion statement: "Thank you, your cheese pizza has
 *           been ordered.". </p>
 *             </li>
 *          </ul>
 *          <p> Not all Amazon Lex messages require a response from the user. For example,
 *       conclusion statements do not require a response. Some messages require
 *       only a yes or no response. In addition to the <code>message</code>, Amazon Lex
 *       provides additional context about the message in the response that you can
 *       use to enhance client behavior, such as displaying the appropriate client
 *       user interface. Consider the following examples: </p>
 *          <ul>
 *             <li>
 *                <p> If the message is to elicit slot data, Amazon Lex returns the
 *           following context information: </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-lex-dialog-state</code> header set to
 *                 <code>ElicitSlot</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-lex-intent-name</code> header set to the intent name
 *               in the current context </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-lex-slot-to-elicit</code> header set to the slot name
 *               for which the <code>message</code> is eliciting information
 *             </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-lex-slots</code> header set to a map of slots
 *               configured for the intent with their current values </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p> If the message is a confirmation prompt, the
 *             <code>x-amz-lex-dialog-state</code> header is set to
 *             <code>Confirmation</code> and the
 *             <code>x-amz-lex-slot-to-elicit</code> header is omitted. </p>
 *             </li>
 *             <li>
 *                <p> If the message is a clarification prompt configured for the
 *           intent, indicating that the user intent is not understood, the
 *             <code>x-amz-dialog-state</code> header is set to
 *             <code>ElicitIntent</code> and the <code>x-amz-slot-to-elicit</code>
 *           header is omitted. </p>
 *             </li>
 *          </ul>
 *          <p> In addition, Amazon Lex also returns your application-specific
 *         <code>sessionAttributes</code>. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing
 *         Conversation Context</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeServiceClient, PostContentCommand } from "@aws-sdk/client-lex-runtime-service"; // ES Modules import
 * // const { LexRuntimeServiceClient, PostContentCommand } = require("@aws-sdk/client-lex-runtime-service"); // CommonJS import
 * const client = new LexRuntimeServiceClient(config);
 * const command = new PostContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PostContentCommandInput} for command's `input` shape.
 * @see {@link PostContentCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PostContentCommand = /** @class */ (function (_super) {
    __extends(PostContentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PostContentCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    PostContentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexRuntimeServiceClient";
        var commandName = "PostContentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PostContentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PostContentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PostContentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PostContentCommand(input, context);
    };
    PostContentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PostContentCommand(output, context);
    };
    return PostContentCommand;
}($Command));
export { PostContentCommand };
//# sourceMappingURL=PostContentCommand.js.map