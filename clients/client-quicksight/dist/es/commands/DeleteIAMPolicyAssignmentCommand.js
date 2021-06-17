import { __extends } from "tslib";
import { DeleteIAMPolicyAssignmentRequest, DeleteIAMPolicyAssignmentResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteIAMPolicyAssignmentCommand, serializeAws_restJson1DeleteIAMPolicyAssignmentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing IAM policy assignment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteIAMPolicyAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteIAMPolicyAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteIAMPolicyAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIAMPolicyAssignmentCommandInput} for command's `input` shape.
 * @see {@link DeleteIAMPolicyAssignmentCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteIAMPolicyAssignmentCommand = /** @class */ (function (_super) {
    __extends(DeleteIAMPolicyAssignmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteIAMPolicyAssignmentCommand(input) {
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
    DeleteIAMPolicyAssignmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DeleteIAMPolicyAssignmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteIAMPolicyAssignmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteIAMPolicyAssignmentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteIAMPolicyAssignmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteIAMPolicyAssignmentCommand(input, context);
    };
    DeleteIAMPolicyAssignmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteIAMPolicyAssignmentCommand(output, context);
    };
    return DeleteIAMPolicyAssignmentCommand;
}($Command));
export { DeleteIAMPolicyAssignmentCommand };
//# sourceMappingURL=DeleteIAMPolicyAssignmentCommand.js.map