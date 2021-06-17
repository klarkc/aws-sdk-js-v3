"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListIntentsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Get a list of intents that meet the specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListIntentsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListIntentsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListIntentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIntentsCommandInput} for command's `input` shape.
 * @see {@link ListIntentsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListIntentsCommand extends smithy_client_1.Command {
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
        const commandName = "ListIntentsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListIntentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListIntentsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListIntentsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListIntentsCommand(output, context);
    }
}
exports.ListIntentsCommand = ListIntentsCommand;
//# sourceMappingURL=ListIntentsCommand.js.map