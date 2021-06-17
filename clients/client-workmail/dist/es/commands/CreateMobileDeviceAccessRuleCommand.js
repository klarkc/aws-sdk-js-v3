import { __extends } from "tslib";
import { CreateMobileDeviceAccessRuleRequest, CreateMobileDeviceAccessRuleResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateMobileDeviceAccessRuleCommand, serializeAws_json1_1CreateMobileDeviceAccessRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new mobile device access rule for the specified Amazon WorkMail organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CreateMobileDeviceAccessRuleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CreateMobileDeviceAccessRuleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new CreateMobileDeviceAccessRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMobileDeviceAccessRuleCommandInput} for command's `input` shape.
 * @see {@link CreateMobileDeviceAccessRuleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateMobileDeviceAccessRuleCommand = /** @class */ (function (_super) {
    __extends(CreateMobileDeviceAccessRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateMobileDeviceAccessRuleCommand(input) {
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
    CreateMobileDeviceAccessRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "CreateMobileDeviceAccessRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateMobileDeviceAccessRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateMobileDeviceAccessRuleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateMobileDeviceAccessRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateMobileDeviceAccessRuleCommand(input, context);
    };
    CreateMobileDeviceAccessRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateMobileDeviceAccessRuleCommand(output, context);
    };
    return CreateMobileDeviceAccessRuleCommand;
}($Command));
export { CreateMobileDeviceAccessRuleCommand };
//# sourceMappingURL=CreateMobileDeviceAccessRuleCommand.js.map