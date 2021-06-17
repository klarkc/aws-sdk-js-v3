import { __extends } from "tslib";
import { UpdatePermissionSetRequest, UpdatePermissionSetResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdatePermissionSetCommand, serializeAws_json1_1UpdatePermissionSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing permission set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, UpdatePermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, UpdatePermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new UpdatePermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePermissionSetCommandInput} for command's `input` shape.
 * @see {@link UpdatePermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePermissionSetCommand = /** @class */ (function (_super) {
    __extends(UpdatePermissionSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePermissionSetCommand(input) {
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
    UpdatePermissionSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "UpdatePermissionSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePermissionSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePermissionSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePermissionSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdatePermissionSetCommand(input, context);
    };
    UpdatePermissionSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdatePermissionSetCommand(output, context);
    };
    return UpdatePermissionSetCommand;
}($Command));
export { UpdatePermissionSetCommand };
//# sourceMappingURL=UpdatePermissionSetCommand.js.map