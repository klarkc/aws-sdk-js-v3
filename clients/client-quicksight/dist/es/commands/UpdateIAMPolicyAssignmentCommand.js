import { __extends } from "tslib";
import { UpdateIAMPolicyAssignmentRequest, UpdateIAMPolicyAssignmentResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateIAMPolicyAssignmentCommand, serializeAws_restJson1UpdateIAMPolicyAssignmentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing IAM policy assignment. This operation updates only the optional
 * 			parameter or parameters that are specified in the request.
 * 		    This overwrites all of the users included in <code>Identities</code>.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateIAMPolicyAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateIAMPolicyAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateIAMPolicyAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIAMPolicyAssignmentCommandInput} for command's `input` shape.
 * @see {@link UpdateIAMPolicyAssignmentCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateIAMPolicyAssignmentCommand = /** @class */ (function (_super) {
    __extends(UpdateIAMPolicyAssignmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateIAMPolicyAssignmentCommand(input) {
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
    UpdateIAMPolicyAssignmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "UpdateIAMPolicyAssignmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateIAMPolicyAssignmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateIAMPolicyAssignmentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateIAMPolicyAssignmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateIAMPolicyAssignmentCommand(input, context);
    };
    UpdateIAMPolicyAssignmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateIAMPolicyAssignmentCommand(output, context);
    };
    return UpdateIAMPolicyAssignmentCommand;
}($Command));
export { UpdateIAMPolicyAssignmentCommand };
//# sourceMappingURL=UpdateIAMPolicyAssignmentCommand.js.map