import { __extends } from "tslib";
import { DeleteIntegrationRequest, DeleteIntegrationResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteIntegrationCommand, serializeAws_restJson1DeleteIntegrationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes an integration from a specific domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteIntegrationCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteIntegrationCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new DeleteIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIntegrationCommandInput} for command's `input` shape.
 * @see {@link DeleteIntegrationCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteIntegrationCommand = /** @class */ (function (_super) {
    __extends(DeleteIntegrationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteIntegrationCommand(input) {
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
    DeleteIntegrationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "DeleteIntegrationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteIntegrationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteIntegrationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteIntegrationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteIntegrationCommand(input, context);
    };
    DeleteIntegrationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteIntegrationCommand(output, context);
    };
    return DeleteIntegrationCommand;
}($Command));
export { DeleteIntegrationCommand };
//# sourceMappingURL=DeleteIntegrationCommand.js.map