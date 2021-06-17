import { __extends } from "tslib";
import { DeleteStorageLensConfigurationRequest } from "../models/models_0";
import { deserializeAws_restXmlDeleteStorageLensConfigurationCommand, serializeAws_restXmlDeleteStorageLensConfigurationCommand, } from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage
 *             activity and usage with Amazon S3 Storage Lens </a> in the
 *          <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>To use this action,
 *          you must have permission to perform the <code>s3:DeleteStorageLensConfiguration</code> action. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the
 *          <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteStorageLensConfigurationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteStorageLensConfigurationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new DeleteStorageLensConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStorageLensConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteStorageLensConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteStorageLensConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeleteStorageLensConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteStorageLensConfigurationCommand(input) {
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
    DeleteStorageLensConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getProcessArnablesPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3ControlClient";
        var commandName = "DeleteStorageLensConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteStorageLensConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteStorageLensConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlDeleteStorageLensConfigurationCommand(input, context);
    };
    DeleteStorageLensConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlDeleteStorageLensConfigurationCommand(output, context);
    };
    return DeleteStorageLensConfigurationCommand;
}($Command));
export { DeleteStorageLensConfigurationCommand };
//# sourceMappingURL=DeleteStorageLensConfigurationCommand.js.map