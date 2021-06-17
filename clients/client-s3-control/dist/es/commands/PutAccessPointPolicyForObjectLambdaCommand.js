import { __extends } from "tslib";
import { PutAccessPointPolicyForObjectLambdaRequest } from "../models/models_0";
import { deserializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand, serializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand, } from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or replaces resource policy for an Object Lambda Access Point. For an example policy, see
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-create.html#olap-create-cli">Creating Object Lambda Access Points</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>The following actions are related to <code>PutAccessPointPolicyForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicyForObjectLambda.html">DeleteAccessPointPolicyForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyForObjectLambda.html">GetAccessPointPolicyForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutAccessPointPolicyForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutAccessPointPolicyForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new PutAccessPointPolicyForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccessPointPolicyForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link PutAccessPointPolicyForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutAccessPointPolicyForObjectLambdaCommand = /** @class */ (function (_super) {
    __extends(PutAccessPointPolicyForObjectLambdaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutAccessPointPolicyForObjectLambdaCommand(input) {
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
    PutAccessPointPolicyForObjectLambdaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getProcessArnablesPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3ControlClient";
        var commandName = "PutAccessPointPolicyForObjectLambdaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutAccessPointPolicyForObjectLambdaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutAccessPointPolicyForObjectLambdaCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand(input, context);
    };
    PutAccessPointPolicyForObjectLambdaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand(output, context);
    };
    return PutAccessPointPolicyForObjectLambdaCommand;
}($Command));
export { PutAccessPointPolicyForObjectLambdaCommand };
//# sourceMappingURL=PutAccessPointPolicyForObjectLambdaCommand.js.map