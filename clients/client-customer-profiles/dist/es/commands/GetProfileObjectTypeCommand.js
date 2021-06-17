import { __extends } from "tslib";
import { GetProfileObjectTypeRequest, GetProfileObjectTypeResponse } from "../models/models_0";
import { deserializeAws_restJson1GetProfileObjectTypeCommand, serializeAws_restJson1GetProfileObjectTypeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the object types for a specific domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetProfileObjectTypeCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetProfileObjectTypeCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new GetProfileObjectTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProfileObjectTypeCommandInput} for command's `input` shape.
 * @see {@link GetProfileObjectTypeCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetProfileObjectTypeCommand = /** @class */ (function (_super) {
    __extends(GetProfileObjectTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetProfileObjectTypeCommand(input) {
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
    GetProfileObjectTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "GetProfileObjectTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetProfileObjectTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetProfileObjectTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetProfileObjectTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetProfileObjectTypeCommand(input, context);
    };
    GetProfileObjectTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetProfileObjectTypeCommand(output, context);
    };
    return GetProfileObjectTypeCommand;
}($Command));
export { GetProfileObjectTypeCommand };
//# sourceMappingURL=GetProfileObjectTypeCommand.js.map