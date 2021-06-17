import { __extends } from "tslib";
import { GetMacieSessionRequest, GetMacieSessionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetMacieSessionCommand, serializeAws_restJson1GetMacieSessionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the current status and configuration settings for an Amazon Macie account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetMacieSessionCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetMacieSessionCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetMacieSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMacieSessionCommandInput} for command's `input` shape.
 * @see {@link GetMacieSessionCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMacieSessionCommand = /** @class */ (function (_super) {
    __extends(GetMacieSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMacieSessionCommand(input) {
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
    GetMacieSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "GetMacieSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMacieSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMacieSessionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMacieSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetMacieSessionCommand(input, context);
    };
    GetMacieSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetMacieSessionCommand(output, context);
    };
    return GetMacieSessionCommand;
}($Command));
export { GetMacieSessionCommand };
//# sourceMappingURL=GetMacieSessionCommand.js.map