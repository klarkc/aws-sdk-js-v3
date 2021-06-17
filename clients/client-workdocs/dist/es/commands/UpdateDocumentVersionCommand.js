import { __extends } from "tslib";
import { UpdateDocumentVersionRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateDocumentVersionCommand, serializeAws_restJson1UpdateDocumentVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the status of the document version to ACTIVE. </p>
 *         <p>Amazon WorkDocs also sets its document container to ACTIVE. This is the last step
 *             in a document upload, after the client uploads the document to an S3-presigned URL
 *             returned by <a>InitiateDocumentVersionUpload</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, UpdateDocumentVersionCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, UpdateDocumentVersionCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new UpdateDocumentVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDocumentVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentVersionCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDocumentVersionCommand = /** @class */ (function (_super) {
    __extends(UpdateDocumentVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDocumentVersionCommand(input) {
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
    UpdateDocumentVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "UpdateDocumentVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDocumentVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDocumentVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDocumentVersionCommand(input, context);
    };
    UpdateDocumentVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDocumentVersionCommand(output, context);
    };
    return UpdateDocumentVersionCommand;
}($Command));
export { UpdateDocumentVersionCommand };
//# sourceMappingURL=UpdateDocumentVersionCommand.js.map