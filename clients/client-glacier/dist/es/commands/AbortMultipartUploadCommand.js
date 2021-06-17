import { __extends } from "tslib";
import { AbortMultipartUploadInput } from "../models/models_0";
import { deserializeAws_restJson1AbortMultipartUploadCommand, serializeAws_restJson1AbortMultipartUploadCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation aborts a multipart upload identified by the upload ID.</p>
 *
 *
 *          <p>After the Abort Multipart Upload request succeeds, you cannot upload any more parts
 *          to the multipart upload or complete the multipart upload. Aborting a completed upload
 *          fails. However, aborting an already-aborted upload will succeed, for a short time. For more
 *          information about uploading a part and completing a multipart upload, see <a>UploadMultipartPart</a> and <a>CompleteMultipartUpload</a>.</p>
 *
 *          <p>This operation is idempotent.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in
 *             Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html">Abort Multipart
 *             Upload</a> in the <i>Amazon Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, AbortMultipartUploadCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, AbortMultipartUploadCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new AbortMultipartUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AbortMultipartUploadCommandInput} for command's `input` shape.
 * @see {@link AbortMultipartUploadCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AbortMultipartUploadCommand = /** @class */ (function (_super) {
    __extends(AbortMultipartUploadCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AbortMultipartUploadCommand(input) {
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
    AbortMultipartUploadCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlacierClient";
        var commandName = "AbortMultipartUploadCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AbortMultipartUploadInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AbortMultipartUploadCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AbortMultipartUploadCommand(input, context);
    };
    AbortMultipartUploadCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AbortMultipartUploadCommand(output, context);
    };
    return AbortMultipartUploadCommand;
}($Command));
export { AbortMultipartUploadCommand };
//# sourceMappingURL=AbortMultipartUploadCommand.js.map