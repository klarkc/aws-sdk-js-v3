import { __extends } from "tslib";
import { DeleteProfileKeyRequest, DeleteProfileKeyResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteProfileKeyCommand, serializeAws_restJson1DeleteProfileKeyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a searchable key from a customer profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteProfileKeyCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteProfileKeyCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new DeleteProfileKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProfileKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteProfileKeyCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteProfileKeyCommand = /** @class */ (function (_super) {
    __extends(DeleteProfileKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteProfileKeyCommand(input) {
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
    DeleteProfileKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "DeleteProfileKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteProfileKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteProfileKeyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteProfileKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteProfileKeyCommand(input, context);
    };
    DeleteProfileKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteProfileKeyCommand(output, context);
    };
    return DeleteProfileKeyCommand;
}($Command));
export { DeleteProfileKeyCommand };
//# sourceMappingURL=DeleteProfileKeyCommand.js.map