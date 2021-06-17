import { __extends } from "tslib";
import { ListAccessPointsForObjectLambdaRequest, ListAccessPointsForObjectLambdaResult } from "../models/models_0";
import { deserializeAws_restXmlListAccessPointsForObjectLambdaCommand, serializeAws_restXmlListAccessPointsForObjectLambdaCommand, } from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the access points associated with the Object Lambda Access Point. You
 *          can retrieve up to 1000 access points per call. If there are more than 1,000
 *          access points (or the number specified in <code>maxResults</code>, whichever is less), the
 *          response will include a continuation token that you can use to list the additional access points.</p>
 *          <p>The following actions are related to <code>ListAccessPointsForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html">CreateAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointForObjectLambda.html">DeleteAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html">GetAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListAccessPointsForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListAccessPointsForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new ListAccessPointsForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccessPointsForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link ListAccessPointsForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAccessPointsForObjectLambdaCommand = /** @class */ (function (_super) {
    __extends(ListAccessPointsForObjectLambdaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAccessPointsForObjectLambdaCommand(input) {
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
    ListAccessPointsForObjectLambdaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getProcessArnablesPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3ControlClient";
        var commandName = "ListAccessPointsForObjectLambdaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAccessPointsForObjectLambdaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAccessPointsForObjectLambdaResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAccessPointsForObjectLambdaCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlListAccessPointsForObjectLambdaCommand(input, context);
    };
    ListAccessPointsForObjectLambdaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlListAccessPointsForObjectLambdaCommand(output, context);
    };
    return ListAccessPointsForObjectLambdaCommand;
}($Command));
export { ListAccessPointsForObjectLambdaCommand };
//# sourceMappingURL=ListAccessPointsForObjectLambdaCommand.js.map