import { __extends } from "tslib";
import { ListStorageLensConfigurationsRequest, ListStorageLensConfigurationsResult } from "../models/models_0";
import { deserializeAws_restXmlListStorageLensConfigurationsCommand, serializeAws_restXmlListStorageLensConfigurationsCommand, } from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of Amazon S3 Storage Lens configurations. For more information about S3 Storage Lens, see
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage
 *             activity and usage with Amazon S3 Storage Lens </a> in the
 *          <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>To use this action,
 *          you must have permission to perform the <code>s3:ListStorageLensConfigurations</code> action. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the
 *          <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListStorageLensConfigurationsCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListStorageLensConfigurationsCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new ListStorageLensConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStorageLensConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListStorageLensConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStorageLensConfigurationsCommand = /** @class */ (function (_super) {
    __extends(ListStorageLensConfigurationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListStorageLensConfigurationsCommand(input) {
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
    ListStorageLensConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getProcessArnablesPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3ControlClient";
        var commandName = "ListStorageLensConfigurationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListStorageLensConfigurationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListStorageLensConfigurationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListStorageLensConfigurationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlListStorageLensConfigurationsCommand(input, context);
    };
    ListStorageLensConfigurationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlListStorageLensConfigurationsCommand(output, context);
    };
    return ListStorageLensConfigurationsCommand;
}($Command));
export { ListStorageLensConfigurationsCommand };
//# sourceMappingURL=ListStorageLensConfigurationsCommand.js.map