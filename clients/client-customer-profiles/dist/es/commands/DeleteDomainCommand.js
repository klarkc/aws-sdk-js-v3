import { __extends } from "tslib";
import { DeleteDomainRequest, DeleteDomainResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteDomainCommand, serializeAws_restJson1DeleteDomainCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specific domain and all of its customer data, such as customer profile
 *          attributes and their related objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteDomainCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteDomainCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new DeleteDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDomainCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDomainCommand = /** @class */ (function (_super) {
    __extends(DeleteDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDomainCommand(input) {
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
    DeleteDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "DeleteDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteDomainCommand(input, context);
    };
    DeleteDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteDomainCommand(output, context);
    };
    return DeleteDomainCommand;
}($Command));
export { DeleteDomainCommand };
//# sourceMappingURL=DeleteDomainCommand.js.map