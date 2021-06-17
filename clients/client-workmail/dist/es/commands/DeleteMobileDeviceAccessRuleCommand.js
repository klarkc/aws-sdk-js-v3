import { __extends } from "tslib";
import { DeleteMobileDeviceAccessRuleRequest, DeleteMobileDeviceAccessRuleResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteMobileDeviceAccessRuleCommand, serializeAws_json1_1DeleteMobileDeviceAccessRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a mobile device access rule for the specified Amazon WorkMail organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteMobileDeviceAccessRuleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteMobileDeviceAccessRuleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DeleteMobileDeviceAccessRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMobileDeviceAccessRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteMobileDeviceAccessRuleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMobileDeviceAccessRuleCommand = /** @class */ (function (_super) {
    __extends(DeleteMobileDeviceAccessRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteMobileDeviceAccessRuleCommand(input) {
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
    DeleteMobileDeviceAccessRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "DeleteMobileDeviceAccessRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMobileDeviceAccessRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteMobileDeviceAccessRuleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMobileDeviceAccessRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteMobileDeviceAccessRuleCommand(input, context);
    };
    DeleteMobileDeviceAccessRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteMobileDeviceAccessRuleCommand(output, context);
    };
    return DeleteMobileDeviceAccessRuleCommand;
}($Command));
export { DeleteMobileDeviceAccessRuleCommand };
//# sourceMappingURL=DeleteMobileDeviceAccessRuleCommand.js.map