import { __extends } from "tslib";
import { DeleteAccountAssignmentRequest, DeleteAccountAssignmentResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteAccountAssignmentCommand, serializeAws_json1_1DeleteAccountAssignmentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a principal's access from a specified AWS account using a specified permission
 *       set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DeleteAccountAssignmentCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DeleteAccountAssignmentCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DeleteAccountAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccountAssignmentCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountAssignmentCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAccountAssignmentCommand = /** @class */ (function (_super) {
    __extends(DeleteAccountAssignmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAccountAssignmentCommand(input) {
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
    DeleteAccountAssignmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "DeleteAccountAssignmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAccountAssignmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAccountAssignmentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAccountAssignmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAccountAssignmentCommand(input, context);
    };
    DeleteAccountAssignmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAccountAssignmentCommand(output, context);
    };
    return DeleteAccountAssignmentCommand;
}($Command));
export { DeleteAccountAssignmentCommand };
//# sourceMappingURL=DeleteAccountAssignmentCommand.js.map