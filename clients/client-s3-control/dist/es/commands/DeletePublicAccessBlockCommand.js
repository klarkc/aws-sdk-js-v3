import { __extends } from "tslib";
import { DeletePublicAccessBlockRequest } from "../models/models_0";
import { deserializeAws_restXmlDeletePublicAccessBlockCommand, serializeAws_restXmlDeletePublicAccessBlockCommand, } from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the <code>PublicAccessBlock</code> configuration for an AWS account. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html"> Using Amazon S3 block
 *             public access</a>.</p>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetPublicAccessBlock.html">GetPublicAccessBlock</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutPublicAccessBlock.html">PutPublicAccessBlock</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeletePublicAccessBlockCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeletePublicAccessBlockCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new DeletePublicAccessBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePublicAccessBlockCommandInput} for command's `input` shape.
 * @see {@link DeletePublicAccessBlockCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePublicAccessBlockCommand = /** @class */ (function (_super) {
    __extends(DeletePublicAccessBlockCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePublicAccessBlockCommand(input) {
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
    DeletePublicAccessBlockCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getProcessArnablesPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3ControlClient";
        var commandName = "DeletePublicAccessBlockCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePublicAccessBlockRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePublicAccessBlockCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlDeletePublicAccessBlockCommand(input, context);
    };
    DeletePublicAccessBlockCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlDeletePublicAccessBlockCommand(output, context);
    };
    return DeletePublicAccessBlockCommand;
}($Command));
export { DeletePublicAccessBlockCommand };
//# sourceMappingURL=DeletePublicAccessBlockCommand.js.map