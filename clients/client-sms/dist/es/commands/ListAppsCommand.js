import { __extends } from "tslib";
import { ListAppsRequest, ListAppsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListAppsCommand, serializeAws_json1_1ListAppsCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves summaries for all applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, ListAppsCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, ListAppsCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new ListAppsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAppsCommandInput} for command's `input` shape.
 * @see {@link ListAppsCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAppsCommand = /** @class */ (function (_super) {
    __extends(ListAppsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAppsCommand(input) {
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
    ListAppsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "ListAppsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAppsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAppsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAppsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAppsCommand(input, context);
    };
    ListAppsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAppsCommand(output, context);
    };
    return ListAppsCommand;
}($Command));
export { ListAppsCommand };
//# sourceMappingURL=ListAppsCommand.js.map