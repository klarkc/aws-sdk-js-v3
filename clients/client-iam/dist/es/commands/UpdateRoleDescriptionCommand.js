import { __extends } from "tslib";
import { UpdateRoleDescriptionRequest, UpdateRoleDescriptionResponse } from "../models/models_1";
import { deserializeAws_queryUpdateRoleDescriptionCommand, serializeAws_queryUpdateRoleDescriptionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use <a>UpdateRole</a> instead.</p>
 *         <p>Modifies only the description of a role. This operation performs the same function as
 *             the <code>Description</code> parameter in the <code>UpdateRole</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateRoleDescriptionCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateRoleDescriptionCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateRoleDescriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoleDescriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateRoleDescriptionCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRoleDescriptionCommand = /** @class */ (function (_super) {
    __extends(UpdateRoleDescriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRoleDescriptionCommand(input) {
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
    UpdateRoleDescriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "UpdateRoleDescriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRoleDescriptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRoleDescriptionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRoleDescriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateRoleDescriptionCommand(input, context);
    };
    UpdateRoleDescriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateRoleDescriptionCommand(output, context);
    };
    return UpdateRoleDescriptionCommand;
}($Command));
export { UpdateRoleDescriptionCommand };
//# sourceMappingURL=UpdateRoleDescriptionCommand.js.map