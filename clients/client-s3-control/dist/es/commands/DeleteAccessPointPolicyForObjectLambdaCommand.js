import { __extends } from "tslib";
import { DeleteAccessPointPolicyForObjectLambdaRequest } from "../models/models_0";
import { deserializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand, serializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand, } from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the resource policy for an Object Lambda Access Point.</p>
 *          <p>The following actions are related to <code>DeleteAccessPointPolicyForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyForObjectLambda.html">GetAccessPointPolicyForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicyForObjectLambda.html">PutAccessPointPolicyForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteAccessPointPolicyForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteAccessPointPolicyForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new DeleteAccessPointPolicyForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccessPointPolicyForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessPointPolicyForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAccessPointPolicyForObjectLambdaCommand = /** @class */ (function (_super) {
    __extends(DeleteAccessPointPolicyForObjectLambdaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAccessPointPolicyForObjectLambdaCommand(input) {
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
    DeleteAccessPointPolicyForObjectLambdaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getProcessArnablesPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3ControlClient";
        var commandName = "DeleteAccessPointPolicyForObjectLambdaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAccessPointPolicyForObjectLambdaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAccessPointPolicyForObjectLambdaCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand(input, context);
    };
    DeleteAccessPointPolicyForObjectLambdaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand(output, context);
    };
    return DeleteAccessPointPolicyForObjectLambdaCommand;
}($Command));
export { DeleteAccessPointPolicyForObjectLambdaCommand };
//# sourceMappingURL=DeleteAccessPointPolicyForObjectLambdaCommand.js.map