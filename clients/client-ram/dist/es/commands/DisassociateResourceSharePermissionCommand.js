import { __extends } from "tslib";
import { DisassociateResourceSharePermissionRequest, DisassociateResourceSharePermissionResponse, } from "../models/models_0";
import { deserializeAws_restJson1DisassociateResourceSharePermissionCommand, serializeAws_restJson1DisassociateResourceSharePermissionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates an AWS RAM permission from a resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, DisassociateResourceSharePermissionCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, DisassociateResourceSharePermissionCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new DisassociateResourceSharePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateResourceSharePermissionCommandInput} for command's `input` shape.
 * @see {@link DisassociateResourceSharePermissionCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateResourceSharePermissionCommand = /** @class */ (function (_super) {
    __extends(DisassociateResourceSharePermissionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateResourceSharePermissionCommand(input) {
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
    DisassociateResourceSharePermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RAMClient";
        var commandName = "DisassociateResourceSharePermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateResourceSharePermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateResourceSharePermissionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateResourceSharePermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateResourceSharePermissionCommand(input, context);
    };
    DisassociateResourceSharePermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateResourceSharePermissionCommand(output, context);
    };
    return DisassociateResourceSharePermissionCommand;
}($Command));
export { DisassociateResourceSharePermissionCommand };
//# sourceMappingURL=DisassociateResourceSharePermissionCommand.js.map