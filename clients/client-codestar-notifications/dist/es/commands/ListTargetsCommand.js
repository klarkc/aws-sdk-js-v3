import { __extends } from "tslib";
import { ListTargetsRequest, ListTargetsResult } from "../models/models_0";
import { deserializeAws_restJson1ListTargetsCommand, serializeAws_restJson1ListTargetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the notification rule targets for an AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, ListTargetsCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, ListTargetsCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new ListTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTargetsCommandInput} for command's `input` shape.
 * @see {@link ListTargetsCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTargetsCommand = /** @class */ (function (_super) {
    __extends(ListTargetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTargetsCommand(input) {
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
    ListTargetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodestarNotificationsClient";
        var commandName = "ListTargetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTargetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTargetsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTargetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListTargetsCommand(input, context);
    };
    ListTargetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListTargetsCommand(output, context);
    };
    return ListTargetsCommand;
}($Command));
export { ListTargetsCommand };
//# sourceMappingURL=ListTargetsCommand.js.map