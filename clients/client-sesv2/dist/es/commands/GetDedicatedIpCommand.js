import { __extends } from "tslib";
import { GetDedicatedIpRequest, GetDedicatedIpResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDedicatedIpCommand, serializeAws_restJson1GetDedicatedIpCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get information about a dedicated IP address, including the name of the dedicated IP
 *             pool that it's associated with, as well information about the automatic warm-up process
 *             for the address.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetDedicatedIpCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetDedicatedIpCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new GetDedicatedIpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDedicatedIpCommandInput} for command's `input` shape.
 * @see {@link GetDedicatedIpCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDedicatedIpCommand = /** @class */ (function (_super) {
    __extends(GetDedicatedIpCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDedicatedIpCommand(input) {
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
    GetDedicatedIpCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "GetDedicatedIpCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDedicatedIpRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDedicatedIpResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDedicatedIpCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDedicatedIpCommand(input, context);
    };
    GetDedicatedIpCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDedicatedIpCommand(output, context);
    };
    return GetDedicatedIpCommand;
}($Command));
export { GetDedicatedIpCommand };
//# sourceMappingURL=GetDedicatedIpCommand.js.map