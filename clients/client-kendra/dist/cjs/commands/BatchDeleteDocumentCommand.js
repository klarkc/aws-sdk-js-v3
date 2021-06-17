"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchDeleteDocumentCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Removes one or more documents from an index. The documents must have
 *       been added with the <code>BatchPutDocument</code> operation.</p>
 *          <p>The documents are deleted asynchronously. You can see the progress of
 *       the deletion by using AWS CloudWatch. Any error messages related to the
 *       processing of the batch are sent to you CloudWatch log.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, BatchDeleteDocumentCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, BatchDeleteDocumentCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new BatchDeleteDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteDocumentCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteDocumentCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
class BatchDeleteDocumentCommand extends smithy_client_1.Command {
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
        const commandName = "BatchDeleteDocumentCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.BatchDeleteDocumentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.BatchDeleteDocumentResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1BatchDeleteDocumentCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1BatchDeleteDocumentCommand(output, context);
    }
}
exports.BatchDeleteDocumentCommand = BatchDeleteDocumentCommand;
//# sourceMappingURL=BatchDeleteDocumentCommand.js.map