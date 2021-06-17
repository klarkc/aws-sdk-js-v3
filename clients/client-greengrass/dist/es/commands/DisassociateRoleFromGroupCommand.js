import { __extends } from "tslib";
import { DisassociateRoleFromGroupRequest, DisassociateRoleFromGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1DisassociateRoleFromGroupCommand, serializeAws_restJson1DisassociateRoleFromGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Disassociates the role from a group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DisassociateRoleFromGroupCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DisassociateRoleFromGroupCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new DisassociateRoleFromGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateRoleFromGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateRoleFromGroupCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateRoleFromGroupCommand = /** @class */ (function (_super) {
    __extends(DisassociateRoleFromGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateRoleFromGroupCommand(input) {
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
    DisassociateRoleFromGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "DisassociateRoleFromGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateRoleFromGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateRoleFromGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateRoleFromGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateRoleFromGroupCommand(input, context);
    };
    DisassociateRoleFromGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateRoleFromGroupCommand(output, context);
    };
    return DisassociateRoleFromGroupCommand;
}($Command));
export { DisassociateRoleFromGroupCommand };
//# sourceMappingURL=DisassociateRoleFromGroupCommand.js.map