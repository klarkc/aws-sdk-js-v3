import { __extends } from "tslib";
import { DeleteProfileObjectTypeRequest, DeleteProfileObjectTypeResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteProfileObjectTypeCommand, serializeAws_restJson1DeleteProfileObjectTypeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a ProfileObjectType from a specific domain as well as removes all the
 *          ProfileObjects of that type. It also disables integrations from this specific
 *          ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that
 *          were populated from this ProfileObjectType.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteProfileObjectTypeCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteProfileObjectTypeCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new DeleteProfileObjectTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProfileObjectTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteProfileObjectTypeCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteProfileObjectTypeCommand = /** @class */ (function (_super) {
    __extends(DeleteProfileObjectTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteProfileObjectTypeCommand(input) {
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
    DeleteProfileObjectTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "DeleteProfileObjectTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteProfileObjectTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteProfileObjectTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteProfileObjectTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteProfileObjectTypeCommand(input, context);
    };
    DeleteProfileObjectTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteProfileObjectTypeCommand(output, context);
    };
    return DeleteProfileObjectTypeCommand;
}($Command));
export { DeleteProfileObjectTypeCommand };
//# sourceMappingURL=DeleteProfileObjectTypeCommand.js.map