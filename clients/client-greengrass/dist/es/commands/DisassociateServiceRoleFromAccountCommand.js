import { __extends } from "tslib";
import { DisassociateServiceRoleFromAccountRequest, DisassociateServiceRoleFromAccountResponse, } from "../models/models_0";
import { deserializeAws_restJson1DisassociateServiceRoleFromAccountCommand, serializeAws_restJson1DisassociateServiceRoleFromAccountCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Disassociates the service role from your account. Without a service role, deployments will not work.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DisassociateServiceRoleFromAccountCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DisassociateServiceRoleFromAccountCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new DisassociateServiceRoleFromAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateServiceRoleFromAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateServiceRoleFromAccountCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateServiceRoleFromAccountCommand = /** @class */ (function (_super) {
    __extends(DisassociateServiceRoleFromAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateServiceRoleFromAccountCommand(input) {
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
    DisassociateServiceRoleFromAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "DisassociateServiceRoleFromAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateServiceRoleFromAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateServiceRoleFromAccountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateServiceRoleFromAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateServiceRoleFromAccountCommand(input, context);
    };
    DisassociateServiceRoleFromAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateServiceRoleFromAccountCommand(output, context);
    };
    return DisassociateServiceRoleFromAccountCommand;
}($Command));
export { DisassociateServiceRoleFromAccountCommand };
//# sourceMappingURL=DisassociateServiceRoleFromAccountCommand.js.map