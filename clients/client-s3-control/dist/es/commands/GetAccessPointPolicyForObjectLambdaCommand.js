import { __extends } from "tslib";
import { GetAccessPointPolicyForObjectLambdaRequest, GetAccessPointPolicyForObjectLambdaResult, } from "../models/models_0";
import { deserializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand, serializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand, } from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the resource policy for an Object Lambda Access Point.</p>
 *          <p>The following actions are related to <code>GetAccessPointPolicyForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicyForObjectLambda.html">DeleteAccessPointPolicyForObjectLambda</a>
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
 * import { S3ControlClient, GetAccessPointPolicyForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessPointPolicyForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new GetAccessPointPolicyForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccessPointPolicyForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link GetAccessPointPolicyForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAccessPointPolicyForObjectLambdaCommand = /** @class */ (function (_super) {
    __extends(GetAccessPointPolicyForObjectLambdaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAccessPointPolicyForObjectLambdaCommand(input) {
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
    GetAccessPointPolicyForObjectLambdaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getProcessArnablesPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3ControlClient";
        var commandName = "GetAccessPointPolicyForObjectLambdaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAccessPointPolicyForObjectLambdaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAccessPointPolicyForObjectLambdaResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAccessPointPolicyForObjectLambdaCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand(input, context);
    };
    GetAccessPointPolicyForObjectLambdaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand(output, context);
    };
    return GetAccessPointPolicyForObjectLambdaCommand;
}($Command));
export { GetAccessPointPolicyForObjectLambdaCommand };
//# sourceMappingURL=GetAccessPointPolicyForObjectLambdaCommand.js.map