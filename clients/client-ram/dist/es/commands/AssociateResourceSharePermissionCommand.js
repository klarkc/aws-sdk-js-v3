import { __extends } from "tslib";
import { AssociateResourceSharePermissionRequest, AssociateResourceSharePermissionResponse } from "../models/models_0";
import { deserializeAws_restJson1AssociateResourceSharePermissionCommand, serializeAws_restJson1AssociateResourceSharePermissionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a permission with a resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, AssociateResourceSharePermissionCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, AssociateResourceSharePermissionCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new AssociateResourceSharePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateResourceSharePermissionCommandInput} for command's `input` shape.
 * @see {@link AssociateResourceSharePermissionCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateResourceSharePermissionCommand = /** @class */ (function (_super) {
    __extends(AssociateResourceSharePermissionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateResourceSharePermissionCommand(input) {
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
    AssociateResourceSharePermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RAMClient";
        var commandName = "AssociateResourceSharePermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateResourceSharePermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateResourceSharePermissionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateResourceSharePermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateResourceSharePermissionCommand(input, context);
    };
    AssociateResourceSharePermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateResourceSharePermissionCommand(output, context);
    };
    return AssociateResourceSharePermissionCommand;
}($Command));
export { AssociateResourceSharePermissionCommand };
//# sourceMappingURL=AssociateResourceSharePermissionCommand.js.map