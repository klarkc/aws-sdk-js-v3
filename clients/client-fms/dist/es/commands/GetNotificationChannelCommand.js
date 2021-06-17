import { __extends } from "tslib";
import { GetNotificationChannelRequest, GetNotificationChannelResponse } from "../models/models_0";
import { deserializeAws_json1_1GetNotificationChannelCommand, serializeAws_json1_1GetNotificationChannelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Information
 *       about the Amazon Simple Notification Service (SNS) topic that is used to
 *       record AWS Firewall Manager SNS logs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetNotificationChannelCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetNotificationChannelCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new GetNotificationChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNotificationChannelCommandInput} for command's `input` shape.
 * @see {@link GetNotificationChannelCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetNotificationChannelCommand = /** @class */ (function (_super) {
    __extends(GetNotificationChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetNotificationChannelCommand(input) {
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
    GetNotificationChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FMSClient";
        var commandName = "GetNotificationChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetNotificationChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetNotificationChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetNotificationChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetNotificationChannelCommand(input, context);
    };
    GetNotificationChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetNotificationChannelCommand(output, context);
    };
    return GetNotificationChannelCommand;
}($Command));
export { GetNotificationChannelCommand };
//# sourceMappingURL=GetNotificationChannelCommand.js.map