import { __extends } from "tslib";
import { UpdateRoleRequest, UpdateRoleResponse } from "../models/models_1";
import { deserializeAws_queryUpdateRoleCommand, serializeAws_queryUpdateRoleCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the description or maximum session duration setting of a role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoleCommandInput} for command's `input` shape.
 * @see {@link UpdateRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRoleCommand = /** @class */ (function (_super) {
    __extends(UpdateRoleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRoleCommand(input) {
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
    UpdateRoleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "UpdateRoleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRoleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRoleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRoleCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateRoleCommand(input, context);
    };
    UpdateRoleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateRoleCommand(output, context);
    };
    return UpdateRoleCommand;
}($Command));
export { UpdateRoleCommand };
//# sourceMappingURL=UpdateRoleCommand.js.map