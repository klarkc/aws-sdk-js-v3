"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Searches an active index. Use this API to search your documents
 *          using query. The <code>Query</code> operation enables to do faceted
 *          search and to filter results based on document attributes.</p>
 *          <p>It also enables you to provide user context that Amazon Kendra uses
 *          to enforce document access control in the search results. </p>
 *          <p>Amazon Kendra searches your index for text content and question and
 *          answer (FAQ) content. By default the response contains three types of
 *          results.</p>
 *          <ul>
 *             <li>
 *                <p>Relevant passages</p>
 *             </li>
 *             <li>
 *                <p>Matching FAQs</p>
 *             </li>
 *             <li>
 *                <p>Relevant documents</p>
 *             </li>
 *          </ul>
 *          <p>You can specify that the query return only one type of result using
 *          the <code>QueryResultTypeConfig</code> parameter.</p>
 *          <p>Each query returns the 100 most relevant results. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, QueryCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, QueryCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new QueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link QueryCommandInput} for command's `input` shape.
 * @see {@link QueryCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
class QueryCommand extends smithy_client_1.Command {
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
        const commandName = "QueryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.QueryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.QueryResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1QueryCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1QueryCommand(output, context);
    }
}
exports.QueryCommand = QueryCommand;
//# sourceMappingURL=QueryCommand.js.map