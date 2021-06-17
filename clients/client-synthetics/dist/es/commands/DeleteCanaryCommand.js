import { __extends } from "tslib";
import { DeleteCanaryRequest, DeleteCanaryResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteCanaryCommand, serializeAws_restJson1DeleteCanaryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Permanently deletes the specified canary.</p>
 *          <p>When you delete a canary, resources used and created by the canary are not automatically deleted. After you delete a canary that you do not intend to
 *          use again, you
 *       should also delete the following:</p>
 *          <ul>
 *             <li>
 *                <p>The Lambda functions and layers used by this canary. These have the prefix
 *                      <code>cwsyn-<i>MyCanaryName</i>
 *                   </code>.</p>
 *             </li>
 *             <li>
 *                <p>The CloudWatch alarms created for this canary. These alarms have a name of
 *                      <code>Synthetics-SharpDrop-Alarm-<i>MyCanaryName</i>
 *                   </code>.</p>
 *             </li>
 *             <li>
 *                <p>Amazon S3 objects and buckets, such as the canary's artifact location.</p>
 *             </li>
 *             <li>
 *                <p>IAM roles created for the canary. If they were created in the console, these roles
 *                have the name <code>
 *                      role/service-role/CloudWatchSyntheticsRole-<i>MyCanaryName</i>
 *                   </code>.</p>
 *             </li>
 *             <li>
 *                <p>CloudWatch Logs log groups created for the canary. These logs groups have the name
 *                      <code>/aws/lambda/cwsyn-<i>MyCanaryName</i>
 *                   </code>. </p>
 *             </li>
 *          </ul>
 *
 *          <p>Before you delete a canary, you might want to use <code>GetCanary</code> to display
 *          the information about this canary. Make
 *          note of the information returned by this operation so that you can delete these resources
 *          after you delete the canary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, DeleteCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, DeleteCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new DeleteCanaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCanaryCommandInput} for command's `input` shape.
 * @see {@link DeleteCanaryCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCanaryCommand = /** @class */ (function (_super) {
    __extends(DeleteCanaryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCanaryCommand(input) {
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
    DeleteCanaryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SyntheticsClient";
        var commandName = "DeleteCanaryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCanaryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteCanaryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCanaryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteCanaryCommand(input, context);
    };
    DeleteCanaryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteCanaryCommand(output, context);
    };
    return DeleteCanaryCommand;
}($Command));
export { DeleteCanaryCommand };
//# sourceMappingURL=DeleteCanaryCommand.js.map