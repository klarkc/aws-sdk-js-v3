"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchPutDocumentCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Adds one or more documents to an index.</p>
 *          <p>The <code>BatchPutDocument</code> operation enables you to ingest
 *       inline documents or a set of documents stored in an Amazon S3 bucket. Use
 *       this operation to ingest your text and unstructured text into an index,
 *       add custom attributes to the documents, and to attach an access control
 *       list to the documents added to the index.</p>
 *          <p>The documents are indexed asynchronously. You can see the progress of
 *       the batch using AWS CloudWatch. Any error messages related to processing
 *       the batch are sent to your AWS CloudWatch log.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, BatchPutDocumentCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, BatchPutDocumentCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new BatchPutDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchPutDocumentCommandInput} for command's `input` shape.
 * @see {@link BatchPutDocumentCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
class BatchPutDocumentCommand extends smithy_client_1.Command {
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
        const commandName = "BatchPutDocumentCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.BatchPutDocumentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.BatchPutDocumentResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1BatchPutDocumentCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1BatchPutDocumentCommand(output, context);
    }
}
exports.BatchPutDocumentCommand = BatchPutDocumentCommand;
//# sourceMappingURL=BatchPutDocumentCommand.js.map