import { __extends } from "tslib";
import { ListIAMPolicyAssignmentsForUserRequest, ListIAMPolicyAssignmentsForUserResponse } from "../models/models_0";
import { deserializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand, serializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the IAM policy assignments, including the Amazon Resource Names (ARNs) for the IAM
 * 			policies assigned to the specified user and group or groups that the user belongs
 * 			to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListIAMPolicyAssignmentsForUserCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListIAMPolicyAssignmentsForUserCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListIAMPolicyAssignmentsForUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIAMPolicyAssignmentsForUserCommandInput} for command's `input` shape.
 * @see {@link ListIAMPolicyAssignmentsForUserCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListIAMPolicyAssignmentsForUserCommand = /** @class */ (function (_super) {
    __extends(ListIAMPolicyAssignmentsForUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListIAMPolicyAssignmentsForUserCommand(input) {
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
    ListIAMPolicyAssignmentsForUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "ListIAMPolicyAssignmentsForUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListIAMPolicyAssignmentsForUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListIAMPolicyAssignmentsForUserResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListIAMPolicyAssignmentsForUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand(input, context);
    };
    ListIAMPolicyAssignmentsForUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand(output, context);
    };
    return ListIAMPolicyAssignmentsForUserCommand;
}($Command));
export { ListIAMPolicyAssignmentsForUserCommand };
//# sourceMappingURL=ListIAMPolicyAssignmentsForUserCommand.js.map