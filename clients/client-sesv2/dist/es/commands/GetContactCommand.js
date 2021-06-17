import { __extends } from "tslib";
import { GetContactRequest, GetContactResponse } from "../models/models_0";
import { deserializeAws_restJson1GetContactCommand, serializeAws_restJson1GetContactCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a contact from a contact list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetContactCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetContactCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new GetContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContactCommandInput} for command's `input` shape.
 * @see {@link GetContactCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetContactCommand = /** @class */ (function (_super) {
    __extends(GetContactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetContactCommand(input) {
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
    GetContactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "GetContactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetContactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetContactResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetContactCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetContactCommand(input, context);
    };
    GetContactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetContactCommand(output, context);
    };
    return GetContactCommand;
}($Command));
export { GetContactCommand };
//# sourceMappingURL=GetContactCommand.js.map