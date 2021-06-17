import { __extends } from "tslib";
import { DeleteIntegrationAssociationRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteIntegrationAssociationCommand, serializeAws_restJson1DeleteIntegrationAssociationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an AppIntegration association from an Amazon Connect instance. The association must not have
 *    any use cases associated with it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteIntegrationAssociationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteIntegrationAssociationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DeleteIntegrationAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIntegrationAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteIntegrationAssociationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteIntegrationAssociationCommand = /** @class */ (function (_super) {
    __extends(DeleteIntegrationAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteIntegrationAssociationCommand(input) {
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
    DeleteIntegrationAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DeleteIntegrationAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteIntegrationAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteIntegrationAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteIntegrationAssociationCommand(input, context);
    };
    DeleteIntegrationAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteIntegrationAssociationCommand(output, context);
    };
    return DeleteIntegrationAssociationCommand;
}($Command));
export { DeleteIntegrationAssociationCommand };
//# sourceMappingURL=DeleteIntegrationAssociationCommand.js.map