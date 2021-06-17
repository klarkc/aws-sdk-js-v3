import { __extends } from "tslib";
import { PutPermissionRequest } from "../models/models_0";
import { deserializeAws_json1_1PutPermissionCommand, serializeAws_json1_1PutPermissionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Running <code>PutPermission</code> permits the specified AWS account or AWS organization
 *       to put events to the specified <i>event bus</i>. Amazon EventBridge (CloudWatch
 *       Events) rules in your account are triggered by these events arriving to an event bus in your
 *       account. </p>
 *          <p>For another account to send events to your account, that external account must have an
 *       EventBridge rule with your account's event bus as a target.</p>
 *
 *          <p>To enable multiple AWS accounts to put events to your event bus, run
 *         <code>PutPermission</code> once for each of these accounts. Or, if all the accounts are
 *       members of the same AWS organization, you can run <code>PutPermission</code> once specifying
 *         <code>Principal</code> as "*" and specifying the AWS organization ID in
 *         <code>Condition</code>, to grant permissions to all accounts in that organization.</p>
 *
 *          <p>If you grant permissions using an organization, then accounts in that organization must
 *       specify a <code>RoleArn</code> with proper permissions when they use <code>PutTarget</code> to
 *       add your account's event bus as a target. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and
 *         Receiving Events Between AWS Accounts</a> in the <i>Amazon EventBridge User
 *         Guide</i>.</p>
 *
 *          <p>The permission policy on the default event bus cannot exceed 10 KB in size.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, PutPermissionCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, PutPermissionCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new PutPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPermissionCommandInput} for command's `input` shape.
 * @see {@link PutPermissionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutPermissionCommand = /** @class */ (function (_super) {
    __extends(PutPermissionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutPermissionCommand(input) {
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
    PutPermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchEventsClient";
        var commandName = "PutPermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutPermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutPermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutPermissionCommand(input, context);
    };
    PutPermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutPermissionCommand(output, context);
    };
    return PutPermissionCommand;
}($Command));
export { PutPermissionCommand };
//# sourceMappingURL=PutPermissionCommand.js.map