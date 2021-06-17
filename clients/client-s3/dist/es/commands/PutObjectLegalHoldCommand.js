import { __extends } from "tslib";
import { PutObjectLegalHoldOutput, PutObjectLegalHoldRequest } from "../models/models_0";
import { deserializeAws_restXmlPutObjectLegalHoldCommand, serializeAws_restXmlPutObjectLegalHoldCommand, } from "../protocols/Aws_restXml";
import { getBucketEndpointPlugin } from "@aws-sdk/middleware-bucket-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Applies a Legal Hold configuration to the specified object. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking
 *             Objects</a>.</p>
 *          <p>This action is not supported by Amazon S3 on Outposts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutObjectLegalHoldCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutObjectLegalHoldCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutObjectLegalHoldCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutObjectLegalHoldCommandInput} for command's `input` shape.
 * @see {@link PutObjectLegalHoldCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutObjectLegalHoldCommand = /** @class */ (function (_super) {
    __extends(PutObjectLegalHoldCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutObjectLegalHoldCommand(input) {
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
    PutObjectLegalHoldCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getBucketEndpointPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3Client";
        var commandName = "PutObjectLegalHoldCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutObjectLegalHoldRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutObjectLegalHoldOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutObjectLegalHoldCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlPutObjectLegalHoldCommand(input, context);
    };
    PutObjectLegalHoldCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlPutObjectLegalHoldCommand(output, context);
    };
    return PutObjectLegalHoldCommand;
}($Command));
export { PutObjectLegalHoldCommand };
//# sourceMappingURL=PutObjectLegalHoldCommand.js.map