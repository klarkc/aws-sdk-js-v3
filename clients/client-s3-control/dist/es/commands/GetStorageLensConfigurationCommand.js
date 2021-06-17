import { __extends } from "tslib";
import { GetStorageLensConfigurationRequest, GetStorageLensConfigurationResult } from "../models/models_0";
import { deserializeAws_restXmlGetStorageLensConfigurationCommand, serializeAws_restXmlGetStorageLensConfigurationCommand, } from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the Amazon S3 Storage Lens configuration. For more information, see
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage
 *             activity and usage with Amazon S3 Storage Lens </a> in the
 *          <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>To use this action,
 *          you must have permission to perform the <code>s3:GetStorageLensConfiguration</code> action. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the
 *          <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetStorageLensConfigurationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetStorageLensConfigurationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new GetStorageLensConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStorageLensConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetStorageLensConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetStorageLensConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetStorageLensConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetStorageLensConfigurationCommand(input) {
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
    GetStorageLensConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getProcessArnablesPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3ControlClient";
        var commandName = "GetStorageLensConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetStorageLensConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetStorageLensConfigurationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetStorageLensConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetStorageLensConfigurationCommand(input, context);
    };
    GetStorageLensConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetStorageLensConfigurationCommand(output, context);
    };
    return GetStorageLensConfigurationCommand;
}($Command));
export { GetStorageLensConfigurationCommand };
//# sourceMappingURL=GetStorageLensConfigurationCommand.js.map