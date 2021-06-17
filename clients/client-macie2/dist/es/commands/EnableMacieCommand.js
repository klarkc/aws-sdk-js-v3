import { __extends } from "tslib";
import { EnableMacieRequest, EnableMacieResponse } from "../models/models_0";
import { deserializeAws_restJson1EnableMacieCommand, serializeAws_restJson1EnableMacieCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables Amazon Macie and specifies the configuration settings for a Macie account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, EnableMacieCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, EnableMacieCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new EnableMacieCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableMacieCommandInput} for command's `input` shape.
 * @see {@link EnableMacieCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableMacieCommand = /** @class */ (function (_super) {
    __extends(EnableMacieCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableMacieCommand(input) {
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
    EnableMacieCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "EnableMacieCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableMacieRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EnableMacieResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableMacieCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1EnableMacieCommand(input, context);
    };
    EnableMacieCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1EnableMacieCommand(output, context);
    };
    return EnableMacieCommand;
}($Command));
export { EnableMacieCommand };
//# sourceMappingURL=EnableMacieCommand.js.map