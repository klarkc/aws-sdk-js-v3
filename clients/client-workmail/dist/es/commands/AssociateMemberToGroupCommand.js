import { __extends } from "tslib";
import { AssociateMemberToGroupRequest, AssociateMemberToGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1AssociateMemberToGroupCommand, serializeAws_json1_1AssociateMemberToGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a member (user or group) to the group's set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, AssociateMemberToGroupCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, AssociateMemberToGroupCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new AssociateMemberToGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateMemberToGroupCommandInput} for command's `input` shape.
 * @see {@link AssociateMemberToGroupCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateMemberToGroupCommand = /** @class */ (function (_super) {
    __extends(AssociateMemberToGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateMemberToGroupCommand(input) {
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
    AssociateMemberToGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "AssociateMemberToGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateMemberToGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateMemberToGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateMemberToGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateMemberToGroupCommand(input, context);
    };
    AssociateMemberToGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateMemberToGroupCommand(output, context);
    };
    return AssociateMemberToGroupCommand;
}($Command));
export { AssociateMemberToGroupCommand };
//# sourceMappingURL=AssociateMemberToGroupCommand.js.map