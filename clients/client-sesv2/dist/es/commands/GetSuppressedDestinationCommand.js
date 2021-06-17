import { __extends } from "tslib";
import { GetSuppressedDestinationRequest, GetSuppressedDestinationResponse } from "../models/models_0";
import { deserializeAws_restJson1GetSuppressedDestinationCommand, serializeAws_restJson1GetSuppressedDestinationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about a specific email address that's on the suppression list
 *             for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetSuppressedDestinationCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetSuppressedDestinationCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new GetSuppressedDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSuppressedDestinationCommandInput} for command's `input` shape.
 * @see {@link GetSuppressedDestinationCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSuppressedDestinationCommand = /** @class */ (function (_super) {
    __extends(GetSuppressedDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSuppressedDestinationCommand(input) {
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
    GetSuppressedDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "GetSuppressedDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSuppressedDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSuppressedDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSuppressedDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSuppressedDestinationCommand(input, context);
    };
    GetSuppressedDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSuppressedDestinationCommand(output, context);
    };
    return GetSuppressedDestinationCommand;
}($Command));
export { GetSuppressedDestinationCommand };
//# sourceMappingURL=GetSuppressedDestinationCommand.js.map