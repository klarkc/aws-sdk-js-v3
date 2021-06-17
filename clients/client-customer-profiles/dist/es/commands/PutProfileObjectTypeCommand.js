import { __extends } from "tslib";
import { PutProfileObjectTypeRequest, PutProfileObjectTypeResponse } from "../models/models_0";
import { deserializeAws_restJson1PutProfileObjectTypeCommand, serializeAws_restJson1PutProfileObjectTypeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Defines a ProfileObjectType.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, PutProfileObjectTypeCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, PutProfileObjectTypeCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new PutProfileObjectTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutProfileObjectTypeCommandInput} for command's `input` shape.
 * @see {@link PutProfileObjectTypeCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutProfileObjectTypeCommand = /** @class */ (function (_super) {
    __extends(PutProfileObjectTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutProfileObjectTypeCommand(input) {
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
    PutProfileObjectTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "PutProfileObjectTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutProfileObjectTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutProfileObjectTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutProfileObjectTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutProfileObjectTypeCommand(input, context);
    };
    PutProfileObjectTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutProfileObjectTypeCommand(output, context);
    };
    return PutProfileObjectTypeCommand;
}($Command));
export { PutProfileObjectTypeCommand };
//# sourceMappingURL=PutProfileObjectTypeCommand.js.map