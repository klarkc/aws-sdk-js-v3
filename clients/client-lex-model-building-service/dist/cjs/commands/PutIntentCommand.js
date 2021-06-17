"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutIntentCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an intent or replaces an existing intent.</p>
 *          <p>To define the interaction between the user and your bot, you use
 *       one or more intents. For a pizza ordering bot, for example, you would
 *       create an <code>OrderPizza</code> intent. </p>
 *          <p>To create an intent or replace an existing intent, you must provide
 *       the following:</p>
 *          <ul>
 *             <li>
 *                <p>Intent name. For example, <code>OrderPizza</code>.</p>
 *             </li>
 *             <li>
 *                <p>Sample utterances. For example, "Can I order a pizza, please."
 *           and "I want to order a pizza."</p>
 *             </li>
 *             <li>
 *                <p>Information to be gathered. You specify slot types for the
 *           information that your bot will request from the user. You can specify
 *           standard slot types, such as a date or a time, or custom slot types
 *           such as the size and crust of a pizza.</p>
 *             </li>
 *             <li>
 *                <p>How the intent will be fulfilled. You can provide a Lambda
 *           function or configure the intent to return the intent information to
 *           the client application. If you use a Lambda function, when all of the
 *           intent information is available, Amazon Lex invokes your Lambda function.
 *           If you configure your intent to return the intent information to the
 *           client application. </p>
 *             </li>
 *          </ul>
 *          <p>You can specify other optional information in the request, such
 *       as:</p>
 *
 *          <ul>
 *             <li>
 *                <p>A confirmation prompt to ask the user to confirm an intent. For
 *           example, "Shall I order your pizza?"</p>
 *             </li>
 *             <li>
 *                <p>A conclusion statement to send to the user after the intent has
 *           been fulfilled. For example, "I placed your pizza order."</p>
 *             </li>
 *             <li>
 *                <p>A follow-up prompt that asks the user for additional activity.
 *           For example, asking "Do you want to order a drink with your
 *           pizza?"</p>
 *             </li>
 *          </ul>
 *          <p>If you specify an existing intent name to update the intent, Amazon Lex
 *       replaces the values in the <code>$LATEST</code> version of the intent with
 *       the values in the request. Amazon Lex removes fields that you don't provide in
 *       the request. If you don't specify the required fields, Amazon Lex throws an
 *       exception. When you update the <code>$LATEST</code> version of an intent,
 *       the <code>status</code> field of any bot that uses the
 *         <code>$LATEST</code> version of the intent is set to
 *         <code>NOT_BUILT</code>.</p>
 *          <p>For more information, see <a>how-it-works</a>.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:PutIntent</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, PutIntentCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, PutIntentCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new PutIntentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutIntentCommandInput} for command's `input` shape.
 * @see {@link PutIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutIntentCommand extends smithy_client_1.Command {
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
        const clientName = "LexModelBuildingServiceClient";
        const commandName = "PutIntentCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutIntentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutIntentResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1PutIntentCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1PutIntentCommand(output, context);
    }
}
exports.PutIntentCommand = PutIntentCommand;
//# sourceMappingURL=PutIntentCommand.js.map