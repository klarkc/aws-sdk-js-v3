"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutBotCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an Amazon Lex conversational bot or replaces an existing bot.
 *       When you create or update a bot you are only required to specify a name, a
 *       locale, and whether the bot is directed toward children under age 13. You
 *       can use this to add intents later, or to remove intents from an existing
 *       bot. When you create a bot with the minimum information, the bot is
 *       created or updated but Amazon Lex returns the <code></code> response
 *         <code>FAILED</code>. You can build the bot after you add one or more
 *       intents. For more information about Amazon Lex bots, see <a>how-it-works</a>. </p>
 *          <p>If you specify the name of an existing bot, the fields in the
 *       request replace the existing values in the <code>$LATEST</code> version of
 *       the bot. Amazon Lex removes any fields that you don't provide values for in the
 *       request, except for the <code>idleTTLInSeconds</code> and
 *         <code>privacySettings</code> fields, which are set to their default
 *       values. If you don't specify values for required fields, Amazon Lex throws an
 *       exception.</p>
 *
 *          <p>This operation requires permissions for the <code>lex:PutBot</code>
 *       action. For more information, see <a>security-iam</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, PutBotCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, PutBotCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new PutBotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBotCommandInput} for command's `input` shape.
 * @see {@link PutBotCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutBotCommand extends smithy_client_1.Command {
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
        const commandName = "PutBotCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutBotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutBotResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1PutBotCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1PutBotCommand(output, context);
    }
}
exports.PutBotCommand = PutBotCommand;
//# sourceMappingURL=PutBotCommand.js.map