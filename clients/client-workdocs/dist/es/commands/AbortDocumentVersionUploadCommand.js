import { __extends } from "tslib";
import { AbortDocumentVersionUploadRequest } from "../models/models_0";
import { deserializeAws_restJson1AbortDocumentVersionUploadCommand, serializeAws_restJson1AbortDocumentVersionUploadCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Aborts the upload of the specified document version that was previously initiated
 *             by <a>InitiateDocumentVersionUpload</a>. The client should make this call
 *             only when it no longer intends to upload the document version, or fails to do
 *             so.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, AbortDocumentVersionUploadCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, AbortDocumentVersionUploadCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new AbortDocumentVersionUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AbortDocumentVersionUploadCommandInput} for command's `input` shape.
 * @see {@link AbortDocumentVersionUploadCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AbortDocumentVersionUploadCommand = /** @class */ (function (_super) {
    __extends(AbortDocumentVersionUploadCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AbortDocumentVersionUploadCommand(input) {
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
    AbortDocumentVersionUploadCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "AbortDocumentVersionUploadCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AbortDocumentVersionUploadRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AbortDocumentVersionUploadCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AbortDocumentVersionUploadCommand(input, context);
    };
    AbortDocumentVersionUploadCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AbortDocumentVersionUploadCommand(output, context);
    };
    return AbortDocumentVersionUploadCommand;
}($Command));
export { AbortDocumentVersionUploadCommand };
//# sourceMappingURL=AbortDocumentVersionUploadCommand.js.map