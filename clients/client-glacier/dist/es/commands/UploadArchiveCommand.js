import { __extends } from "tslib";
import { ArchiveCreationOutput, UploadArchiveInput } from "../models/models_0";
import { deserializeAws_restJson1UploadArchiveCommand, serializeAws_restJson1UploadArchiveCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation adds an archive to a vault. This is a synchronous operation, and for a
 *          successful upload, your data is durably persisted. Amazon S3 Glacier returns the archive ID in
 *          the <code>x-amz-archive-id</code> header of the response. </p>
 *
 *          <p>You must use the archive ID to access your data in Amazon S3 Glacier. After you upload
 *          an archive, you should save the archive ID returned so that you can retrieve or delete the
 *          archive later. Besides saving the archive ID, you can also index it and give it a friendly
 *          name to allow for better searching. You can also use the optional archive description field
 *          to specify how the archive is referred to in an external index of archives, such as you
 *          might create in Amazon DynamoDB. You can also get the vault inventory to obtain a list of
 *          archive IDs in a vault. For more information, see <a>InitiateJob</a>. </p>
 *
 *          <p>You must provide a SHA256 tree hash of the data you are uploading. For information
 *          about computing a SHA256 tree hash, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing Checksums</a>. </p>
 *
 *          <p>You can optionally specify an archive description of up to 1,024 printable ASCII
 *          characters. You can get the archive description when you either retrieve the archive or get
 *          the vault inventory. For more information, see <a>InitiateJob</a>. Amazon
 *          Glacier does not interpret the description in any way. An archive description does not need
 *          to be unique. You cannot use the description to retrieve or sort the archive list. </p>
 *
 *          <p>Archives are immutable. After you upload an archive, you cannot edit the archive or
 *          its description.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-an-archive.html">Uploading an Archive in Amazon
 *             Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html">Upload Archive</a> in the
 *             <i>Amazon Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, UploadArchiveCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, UploadArchiveCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new UploadArchiveCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UploadArchiveCommandInput} for command's `input` shape.
 * @see {@link UploadArchiveCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UploadArchiveCommand = /** @class */ (function (_super) {
    __extends(UploadArchiveCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UploadArchiveCommand(input) {
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
    UploadArchiveCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlacierClient";
        var commandName = "UploadArchiveCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UploadArchiveInput.filterSensitiveLog,
            outputFilterSensitiveLog: ArchiveCreationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UploadArchiveCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UploadArchiveCommand(input, context);
    };
    UploadArchiveCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UploadArchiveCommand(output, context);
    };
    return UploadArchiveCommand;
}($Command));
export { UploadArchiveCommand };
//# sourceMappingURL=UploadArchiveCommand.js.map