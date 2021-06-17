import { LexRuntimeServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeServiceClient";
import { PostTextRequest, PostTextResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PostTextCommandInput extends PostTextRequest {
}
export interface PostTextCommandOutput extends PostTextResponse, __MetadataBearer {
}
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
export declare class PostTextCommand extends $Command<PostTextCommandInput, PostTextCommandOutput, LexRuntimeServiceClientResolvedConfig> {
    readonly input: PostTextCommandInput;
    constructor(input: PostTextCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexRuntimeServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PostTextCommandInput, PostTextCommandOutput>;
    private serialize;
    private deserialize;
}
