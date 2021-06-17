import { __extends } from "tslib";
import { DeleteArchiveInput } from "../models/models_0";
import { deserializeAws_restJson1DeleteArchiveCommand, serializeAws_restJson1DeleteArchiveCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation deletes an archive from a vault. Subsequent requests to initiate a
 *          retrieval of this archive will fail. Archive retrievals that are in progress for this
 *          archive ID may or may not succeed according to the following scenarios:</p>
 *          <ul>
 *             <li>
 *                <p>If the archive retrieval job is actively preparing the data for download when
 *                Amazon S3 Glacier receives the delete archive request, the archival retrieval operation
 *                might fail.</p>
 *             </li>
 *             <li>
 *                <p>If the archive retrieval job has successfully prepared the archive for download
 *                when Amazon S3 Glacier receives the delete archive request, you will be able to download
 *                the output.</p>
 *             </li>
 *          </ul>
 *
 *          <p>This operation is idempotent. Attempting to delete an already-deleted archive does
 *          not result in an error.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/deleting-an-archive.html">Deleting an Archive in Amazon
 *             Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html">Delete Archive</a> in the
 *             <i>Amazon Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, DeleteArchiveCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, DeleteArchiveCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new DeleteArchiveCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteArchiveCommandInput} for command's `input` shape.
 * @see {@link DeleteArchiveCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteArchiveCommand = /** @class */ (function (_super) {
    __extends(DeleteArchiveCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteArchiveCommand(input) {
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
    DeleteArchiveCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlacierClient";
        var commandName = "DeleteArchiveCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteArchiveInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteArchiveCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteArchiveCommand(input, context);
    };
    DeleteArchiveCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteArchiveCommand(output, context);
    };
    return DeleteArchiveCommand;
}($Command));
export { DeleteArchiveCommand };
//# sourceMappingURL=DeleteArchiveCommand.js.map