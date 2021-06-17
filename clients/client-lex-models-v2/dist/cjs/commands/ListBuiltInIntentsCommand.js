"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBuiltInIntentsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets a list of built-in intents provided by Amazon Lex that you can use
 *          in your bot. </p>
 *          <p>To use a built-in intent as a the base for your own intent, include
 *          the built-in intent signature in the <code>parentIntentSignature</code>
 *          parameter when you call the <code>CreateIntent</code> operation. For
 *          more information, see <a>CreateIntent</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBuiltInIntentsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBuiltInIntentsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListBuiltInIntentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBuiltInIntentsCommandInput} for command's `input` shape.
 * @see {@link ListBuiltInIntentsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListBuiltInIntentsCommand extends smithy_client_1.Command {
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
        const clientName = "LexModelsV2Client";
        const commandName = "ListBuiltInIntentsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListBuiltInIntentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListBuiltInIntentsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListBuiltInIntentsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListBuiltInIntentsCommand(output, context);
    }
}
exports.ListBuiltInIntentsCommand = ListBuiltInIntentsCommand;
//# sourceMappingURL=ListBuiltInIntentsCommand.js.map