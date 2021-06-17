"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchGetCrawlersCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of resource metadata for a given list of crawler names. After calling the <code>ListCrawlers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetCrawlersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetCrawlersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchGetCrawlersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetCrawlersCommandInput} for command's `input` shape.
 * @see {@link BatchGetCrawlersCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
class BatchGetCrawlersCommand extends smithy_client_1.Command {
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
        const clientName = "GlueClient";
        const commandName = "BatchGetCrawlersCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.BatchGetCrawlersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.BatchGetCrawlersResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1BatchGetCrawlersCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1BatchGetCrawlersCommand(output, context);
    }
}
exports.BatchGetCrawlersCommand = BatchGetCrawlersCommand;
//# sourceMappingURL=BatchGetCrawlersCommand.js.map