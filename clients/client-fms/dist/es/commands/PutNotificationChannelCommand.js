import { __extends } from "tslib";
import { PutNotificationChannelRequest } from "../models/models_0";
import { deserializeAws_json1_1PutNotificationChannelCommand, serializeAws_json1_1PutNotificationChannelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that AWS
 *       Firewall Manager uses to record SNS logs.</p>
 *          <p>To perform this action outside of the console, you must configure the SNS topic to allow the Firewall Manager
 *       role <code>AWSServiceRoleForFMS</code> to publish SNS logs. For more information, see
 *       <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-api-permissions-ref.html">Firewall Manager required permissions for API actions</a> in the <i>AWS Firewall Manager Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, PutNotificationChannelCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, PutNotificationChannelCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new PutNotificationChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutNotificationChannelCommandInput} for command's `input` shape.
 * @see {@link PutNotificationChannelCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutNotificationChannelCommand = /** @class */ (function (_super) {
    __extends(PutNotificationChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutNotificationChannelCommand(input) {
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
    PutNotificationChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FMSClient";
        var commandName = "PutNotificationChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutNotificationChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutNotificationChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutNotificationChannelCommand(input, context);
    };
    PutNotificationChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutNotificationChannelCommand(output, context);
    };
    return PutNotificationChannelCommand;
}($Command));
export { PutNotificationChannelCommand };
//# sourceMappingURL=PutNotificationChannelCommand.js.map