import { __extends } from "tslib";
import { PutObjectRetentionOutput, PutObjectRetentionRequest } from "../models/models_0";
import { deserializeAws_restXmlPutObjectRetentionCommand, serializeAws_restXmlPutObjectRetentionCommand, } from "../protocols/Aws_restXml";
import { getBucketEndpointPlugin } from "@aws-sdk/middleware-bucket-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Places an Object Retention configuration on an object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking Objects</a>.
 *          </p>
 *          <p>This action is not supported by Amazon S3 on Outposts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutObjectRetentionCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutObjectRetentionCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutObjectRetentionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutObjectRetentionCommandInput} for command's `input` shape.
 * @see {@link PutObjectRetentionCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutObjectRetentionCommand = /** @class */ (function (_super) {
    __extends(PutObjectRetentionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutObjectRetentionCommand(input) {
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
    PutObjectRetentionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getBucketEndpointPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3Client";
        var commandName = "PutObjectRetentionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutObjectRetentionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutObjectRetentionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutObjectRetentionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlPutObjectRetentionCommand(input, context);
    };
    PutObjectRetentionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlPutObjectRetentionCommand(output, context);
    };
    return PutObjectRetentionCommand;
}($Command));
export { PutObjectRetentionCommand };
//# sourceMappingURL=PutObjectRetentionCommand.js.map