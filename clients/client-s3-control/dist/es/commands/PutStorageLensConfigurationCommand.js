import { __extends } from "tslib";
import { PutStorageLensConfigurationRequest } from "../models/models_0";
import { deserializeAws_restXmlPutStorageLensConfigurationCommand, serializeAws_restXmlPutStorageLensConfigurationCommand, } from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Puts an Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Working with
 *             Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>To use this action,
 *          you must have permission to perform the <code>s3:PutStorageLensConfiguration</code> action. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the
 *          <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutStorageLensConfigurationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutStorageLensConfigurationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new PutStorageLensConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutStorageLensConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutStorageLensConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutStorageLensConfigurationCommand = /** @class */ (function (_super) {
    __extends(PutStorageLensConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutStorageLensConfigurationCommand(input) {
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
    PutStorageLensConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getProcessArnablesPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3ControlClient";
        var commandName = "PutStorageLensConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutStorageLensConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutStorageLensConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlPutStorageLensConfigurationCommand(input, context);
    };
    PutStorageLensConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlPutStorageLensConfigurationCommand(output, context);
    };
    return PutStorageLensConfigurationCommand;
}($Command));
export { PutStorageLensConfigurationCommand };
//# sourceMappingURL=PutStorageLensConfigurationCommand.js.map