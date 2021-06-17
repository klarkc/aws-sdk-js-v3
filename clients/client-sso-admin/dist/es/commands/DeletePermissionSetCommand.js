import { __extends } from "tslib";
import { DeletePermissionSetRequest, DeletePermissionSetResponse } from "../models/models_0";
import { deserializeAws_json1_1DeletePermissionSetCommand, serializeAws_json1_1DeletePermissionSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified permission set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DeletePermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DeletePermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DeletePermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePermissionSetCommandInput} for command's `input` shape.
 * @see {@link DeletePermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePermissionSetCommand = /** @class */ (function (_super) {
    __extends(DeletePermissionSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePermissionSetCommand(input) {
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
    DeletePermissionSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "DeletePermissionSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePermissionSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePermissionSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePermissionSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeletePermissionSetCommand(input, context);
    };
    DeletePermissionSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeletePermissionSetCommand(output, context);
    };
    return DeletePermissionSetCommand;
}($Command));
export { DeletePermissionSetCommand };
//# sourceMappingURL=DeletePermissionSetCommand.js.map