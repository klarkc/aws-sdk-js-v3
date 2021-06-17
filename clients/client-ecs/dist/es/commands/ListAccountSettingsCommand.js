import { __extends } from "tslib";
import { ListAccountSettingsRequest, ListAccountSettingsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListAccountSettingsCommand, serializeAws_json1_1ListAccountSettingsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the account settings for a specified principal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListAccountSettingsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListAccountSettingsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ListAccountSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link ListAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAccountSettingsCommand = /** @class */ (function (_super) {
    __extends(ListAccountSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAccountSettingsCommand(input) {
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
    ListAccountSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "ListAccountSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAccountSettingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAccountSettingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAccountSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAccountSettingsCommand(input, context);
    };
    ListAccountSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAccountSettingsCommand(output, context);
    };
    return ListAccountSettingsCommand;
}($Command));
export { ListAccountSettingsCommand };
//# sourceMappingURL=ListAccountSettingsCommand.js.map