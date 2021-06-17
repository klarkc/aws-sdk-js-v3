import { __extends } from "tslib";
import { GetCustomDataIdentifierRequest, GetCustomDataIdentifierResponse } from "../models/models_0";
import { deserializeAws_restJson1GetCustomDataIdentifierCommand, serializeAws_restJson1GetCustomDataIdentifierCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the criteria and other settings for a custom data identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetCustomDataIdentifierCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetCustomDataIdentifierCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetCustomDataIdentifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCustomDataIdentifierCommandInput} for command's `input` shape.
 * @see {@link GetCustomDataIdentifierCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCustomDataIdentifierCommand = /** @class */ (function (_super) {
    __extends(GetCustomDataIdentifierCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCustomDataIdentifierCommand(input) {
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
    GetCustomDataIdentifierCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "GetCustomDataIdentifierCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCustomDataIdentifierRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCustomDataIdentifierResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCustomDataIdentifierCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCustomDataIdentifierCommand(input, context);
    };
    GetCustomDataIdentifierCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCustomDataIdentifierCommand(output, context);
    };
    return GetCustomDataIdentifierCommand;
}($Command));
export { GetCustomDataIdentifierCommand };
//# sourceMappingURL=GetCustomDataIdentifierCommand.js.map