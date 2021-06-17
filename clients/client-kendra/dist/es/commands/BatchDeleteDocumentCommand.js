import { __extends } from "tslib";
import { BatchDeleteDocumentRequest, BatchDeleteDocumentResponse } from "../models/models_0";
import { deserializeAws_json1_1BatchDeleteDocumentCommand, serializeAws_json1_1BatchDeleteDocumentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var BatchDeleteDocumentCommand = /** @class */ (function (_super) {
    __extends(BatchDeleteDocumentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchDeleteDocumentCommand(input) {
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
    BatchDeleteDocumentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "BatchDeleteDocumentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDeleteDocumentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchDeleteDocumentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDeleteDocumentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchDeleteDocumentCommand(input, context);
    };
    BatchDeleteDocumentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchDeleteDocumentCommand(output, context);
    };
    return BatchDeleteDocumentCommand;
}($Command));
export { BatchDeleteDocumentCommand };
//# sourceMappingURL=BatchDeleteDocumentCommand.js.map