import { __extends } from "tslib";
import { DeleteStorageLensConfigurationTaggingRequest, DeleteStorageLensConfigurationTaggingResult, } from "../models/models_0";
import { deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand, serializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand, } from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the Amazon S3 Storage Lens configuration tags. For more information about S3 Storage Lens, see
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage
 *             activity and usage with Amazon S3 Storage Lens </a> in the
 *          <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>To use this action,
 *          you must have permission to perform the <code>s3:DeleteStorageLensConfigurationTagging</code> action. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the
 *          <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteStorageLensConfigurationTaggingCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteStorageLensConfigurationTaggingCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new DeleteStorageLensConfigurationTaggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStorageLensConfigurationTaggingCommandInput} for command's `input` shape.
 * @see {@link DeleteStorageLensConfigurationTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteStorageLensConfigurationTaggingCommand = /** @class */ (function (_super) {
    __extends(DeleteStorageLensConfigurationTaggingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteStorageLensConfigurationTaggingCommand(input) {
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
    DeleteStorageLensConfigurationTaggingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getProcessArnablesPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3ControlClient";
        var commandName = "DeleteStorageLensConfigurationTaggingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteStorageLensConfigurationTaggingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteStorageLensConfigurationTaggingResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteStorageLensConfigurationTaggingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand(input, context);
    };
    DeleteStorageLensConfigurationTaggingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand(output, context);
    };
    return DeleteStorageLensConfigurationTaggingCommand;
}($Command));
export { DeleteStorageLensConfigurationTaggingCommand };
//# sourceMappingURL=DeleteStorageLensConfigurationTaggingCommand.js.map