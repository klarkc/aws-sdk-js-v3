import { __extends } from "tslib";
import { PutObjectLockConfigurationOutput, PutObjectLockConfigurationRequest } from "../models/models_0";
import { deserializeAws_restXmlPutObjectLockConfigurationCommand, serializeAws_restXmlPutObjectLockConfigurationCommand, } from "../protocols/Aws_restXml";
import { getBucketEndpointPlugin } from "@aws-sdk/middleware-bucket-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Places an Object Lock configuration on the specified bucket. The rule specified in the
 *          Object Lock configuration will be applied by default to every new object placed in the
 *          specified bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking Objects</a>.
 *       </p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>The <code>DefaultRetention</code> settings require both a mode and a
 *                period.</p>
 *                </li>
 *                <li>
 *                   <p>The <code>DefaultRetention</code> period can be either <code>Days</code>
 *                or <code>Years</code> but you must select one. You cannot specify <code>Days</code>
 *                and <code>Years</code> at the same time.</p>
 *                </li>
 *                <li>
 *                   <p>You can only enable Object Lock for new buckets. If you want to turn on
 *                Object Lock for an existing bucket, contact AWS Support.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutObjectLockConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutObjectLockConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutObjectLockConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutObjectLockConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutObjectLockConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutObjectLockConfigurationCommand = /** @class */ (function (_super) {
    __extends(PutObjectLockConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutObjectLockConfigurationCommand(input) {
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
    PutObjectLockConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getBucketEndpointPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3Client";
        var commandName = "PutObjectLockConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutObjectLockConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutObjectLockConfigurationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutObjectLockConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlPutObjectLockConfigurationCommand(input, context);
    };
    PutObjectLockConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlPutObjectLockConfigurationCommand(output, context);
    };
    return PutObjectLockConfigurationCommand;
}($Command));
export { PutObjectLockConfigurationCommand };
//# sourceMappingURL=PutObjectLockConfigurationCommand.js.map