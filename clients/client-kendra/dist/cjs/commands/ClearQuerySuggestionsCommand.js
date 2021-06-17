"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearQuerySuggestionsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Clears existing query suggestions from an index.</p>
 *         <p>This deletes existing suggestions only, not the queries
 *             in the query log. After you clear suggestions, Amazon Kendra learns
 *             new suggestions based on new queries added to the query log
 *             from the time you cleared suggestions. If you do not see any
 *             new suggestions, then please allow Amazon Kendra to collect
 *             enough queries to learn new suggestions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ClearQuerySuggestionsCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ClearQuerySuggestionsCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new ClearQuerySuggestionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ClearQuerySuggestionsCommandInput} for command's `input` shape.
 * @see {@link ClearQuerySuggestionsCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ClearQuerySuggestionsCommand extends smithy_client_1.Command {
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
        const clientName = "KendraClient";
        const commandName = "ClearQuerySuggestionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ClearQuerySuggestionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ClearQuerySuggestionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ClearQuerySuggestionsCommand(output, context);
    }
}
exports.ClearQuerySuggestionsCommand = ClearQuerySuggestionsCommand;
//# sourceMappingURL=ClearQuerySuggestionsCommand.js.map