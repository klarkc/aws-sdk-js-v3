import { __extends } from "tslib";
import { DeleteProfileObjectRequest, DeleteProfileObjectResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteProfileObjectCommand, serializeAws_restJson1DeleteProfileObjectCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes an object associated with a profile of a given ProfileObjectType.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteProfileObjectCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteProfileObjectCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new DeleteProfileObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProfileObjectCommandInput} for command's `input` shape.
 * @see {@link DeleteProfileObjectCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteProfileObjectCommand = /** @class */ (function (_super) {
    __extends(DeleteProfileObjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteProfileObjectCommand(input) {
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
    DeleteProfileObjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "DeleteProfileObjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteProfileObjectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteProfileObjectResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteProfileObjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteProfileObjectCommand(input, context);
    };
    DeleteProfileObjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteProfileObjectCommand(output, context);
    };
    return DeleteProfileObjectCommand;
}($Command));
export { DeleteProfileObjectCommand };
//# sourceMappingURL=DeleteProfileObjectCommand.js.map