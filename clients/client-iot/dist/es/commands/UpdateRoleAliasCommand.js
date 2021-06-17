import { __extends } from "tslib";
import { UpdateRoleAliasRequest, UpdateRoleAliasResponse } from "../models/models_2";
import { deserializeAws_restJson1UpdateRoleAliasCommand, serializeAws_restJson1UpdateRoleAliasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a role alias.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateRoleAliasCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateRoleAliasCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateRoleAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoleAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateRoleAliasCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRoleAliasCommand = /** @class */ (function (_super) {
    __extends(UpdateRoleAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRoleAliasCommand(input) {
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
    UpdateRoleAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateRoleAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRoleAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRoleAliasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRoleAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateRoleAliasCommand(input, context);
    };
    UpdateRoleAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateRoleAliasCommand(output, context);
    };
    return UpdateRoleAliasCommand;
}($Command));
export { UpdateRoleAliasCommand };
//# sourceMappingURL=UpdateRoleAliasCommand.js.map