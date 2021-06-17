"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDataSourcesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists the data sources that you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ListDataSourcesCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ListDataSourcesCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new ListDataSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataSourcesCommandInput} for command's `input` shape.
 * @see {@link ListDataSourcesCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListDataSourcesCommand extends smithy_client_1.Command {
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
        const commandName = "ListDataSourcesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListDataSourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListDataSourcesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListDataSourcesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListDataSourcesCommand(output, context);
    }
}
exports.ListDataSourcesCommand = ListDataSourcesCommand;
//# sourceMappingURL=ListDataSourcesCommand.js.map