import { __extends } from "tslib";
import { PutAccessControlRuleRequest, PutAccessControlRuleResponse } from "../models/models_0";
import { deserializeAws_json1_1PutAccessControlRuleCommand, serializeAws_json1_1PutAccessControlRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a new access control rule for the specified organization. The rule allows or
 *          denies access to the organization for the specified IPv4 addresses, access protocol
 *          actions, and user IDs. Adding a new rule with the same name as an existing rule replaces
 *          the older rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, PutAccessControlRuleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, PutAccessControlRuleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new PutAccessControlRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccessControlRuleCommandInput} for command's `input` shape.
 * @see {@link PutAccessControlRuleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutAccessControlRuleCommand = /** @class */ (function (_super) {
    __extends(PutAccessControlRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutAccessControlRuleCommand(input) {
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
    PutAccessControlRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "PutAccessControlRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutAccessControlRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutAccessControlRuleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutAccessControlRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutAccessControlRuleCommand(input, context);
    };
    PutAccessControlRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutAccessControlRuleCommand(output, context);
    };
    return PutAccessControlRuleCommand;
}($Command));
export { PutAccessControlRuleCommand };
//# sourceMappingURL=PutAccessControlRuleCommand.js.map