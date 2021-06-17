import { __extends } from "tslib";
import { ListMobileDeviceAccessRulesRequest, ListMobileDeviceAccessRulesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListMobileDeviceAccessRulesCommand, serializeAws_json1_1ListMobileDeviceAccessRulesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the mobile device access rules for the specified Amazon WorkMail organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListMobileDeviceAccessRulesCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListMobileDeviceAccessRulesCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new ListMobileDeviceAccessRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMobileDeviceAccessRulesCommandInput} for command's `input` shape.
 * @see {@link ListMobileDeviceAccessRulesCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMobileDeviceAccessRulesCommand = /** @class */ (function (_super) {
    __extends(ListMobileDeviceAccessRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMobileDeviceAccessRulesCommand(input) {
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
    ListMobileDeviceAccessRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "ListMobileDeviceAccessRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMobileDeviceAccessRulesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListMobileDeviceAccessRulesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMobileDeviceAccessRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListMobileDeviceAccessRulesCommand(input, context);
    };
    ListMobileDeviceAccessRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListMobileDeviceAccessRulesCommand(output, context);
    };
    return ListMobileDeviceAccessRulesCommand;
}($Command));
export { ListMobileDeviceAccessRulesCommand };
//# sourceMappingURL=ListMobileDeviceAccessRulesCommand.js.map