import { __extends } from "tslib";
import { BatchPutDocumentRequest, BatchPutDocumentResponse } from "../models/models_0";
import { deserializeAws_json1_1BatchPutDocumentCommand, serializeAws_json1_1BatchPutDocumentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var BatchPutDocumentCommand = /** @class */ (function (_super) {
    __extends(BatchPutDocumentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchPutDocumentCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    BatchPutDocumentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "BatchPutDocumentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchPutDocumentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchPutDocumentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchPutDocumentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchPutDocumentCommand(input, context);
    };
    BatchPutDocumentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchPutDocumentCommand(output, context);
    };
    return BatchPutDocumentCommand;
}($Command));
export { BatchPutDocumentCommand };
//# sourceMappingURL=BatchPutDocumentCommand.js.map