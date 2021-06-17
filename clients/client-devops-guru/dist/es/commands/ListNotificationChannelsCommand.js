import { __extends } from "tslib";
import { ListNotificationChannelsRequest, ListNotificationChannelsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListNotificationChannelsCommand, serializeAws_restJson1ListNotificationChannelsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    		Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when
 *    		DevOps Guru generates an insight that contains information about how to improve your operations. The one
 *       	supported notification channel is Amazon Simple Notification Service (Amazon SNS).
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListNotificationChannelsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListNotificationChannelsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new ListNotificationChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNotificationChannelsCommandInput} for command's `input` shape.
 * @see {@link ListNotificationChannelsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListNotificationChannelsCommand = /** @class */ (function (_super) {
    __extends(ListNotificationChannelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListNotificationChannelsCommand(input) {
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
    ListNotificationChannelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DevOpsGuruClient";
        var commandName = "ListNotificationChannelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListNotificationChannelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListNotificationChannelsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListNotificationChannelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListNotificationChannelsCommand(input, context);
    };
    ListNotificationChannelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListNotificationChannelsCommand(output, context);
    };
    return ListNotificationChannelsCommand;
}($Command));
export { ListNotificationChannelsCommand };
//# sourceMappingURL=ListNotificationChannelsCommand.js.map