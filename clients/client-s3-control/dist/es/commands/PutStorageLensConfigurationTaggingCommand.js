import { __extends } from "tslib";
import { PutStorageLensConfigurationTaggingRequest, PutStorageLensConfigurationTaggingResult, } from "../models/models_0";
import { deserializeAws_restXmlPutStorageLensConfigurationTaggingCommand, serializeAws_restXmlPutStorageLensConfigurationTaggingCommand, } from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Put or replace tags on an existing Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage
 *             activity and usage with Amazon S3 Storage Lens </a> in the
 *          <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>To use this action,
 *          you must have permission to perform the <code>s3:PutStorageLensConfigurationTagging</code> action. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the
 *          <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutStorageLensConfigurationTaggingCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutStorageLensConfigurationTaggingCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new PutStorageLensConfigurationTaggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutStorageLensConfigurationTaggingCommandInput} for command's `input` shape.
 * @see {@link PutStorageLensConfigurationTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutStorageLensConfigurationTaggingCommand = /** @class */ (function (_super) {
    __extends(PutStorageLensConfigurationTaggingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutStorageLensConfigurationTaggingCommand(input) {
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
    PutStorageLensConfigurationTaggingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getProcessArnablesPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3ControlClient";
        var commandName = "PutStorageLensConfigurationTaggingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutStorageLensConfigurationTaggingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutStorageLensConfigurationTaggingResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutStorageLensConfigurationTaggingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlPutStorageLensConfigurationTaggingCommand(input, context);
    };
    PutStorageLensConfigurationTaggingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlPutStorageLensConfigurationTaggingCommand(output, context);
    };
    return PutStorageLensConfigurationTaggingCommand;
}($Command));
export { PutStorageLensConfigurationTaggingCommand };
//# sourceMappingURL=PutStorageLensConfigurationTaggingCommand.js.map