import { __extends } from "tslib";
import { PutConfigurationSetSuppressionOptionsRequest, PutConfigurationSetSuppressionOptionsResponse, } from "../models/models_0";
import { deserializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand, serializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Specify the account suppression list preferences for a configuration set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutConfigurationSetSuppressionOptionsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutConfigurationSetSuppressionOptionsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutConfigurationSetSuppressionOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConfigurationSetSuppressionOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetSuppressionOptionsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutConfigurationSetSuppressionOptionsCommand = /** @class */ (function (_super) {
    __extends(PutConfigurationSetSuppressionOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutConfigurationSetSuppressionOptionsCommand(input) {
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
    PutConfigurationSetSuppressionOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "PutConfigurationSetSuppressionOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutConfigurationSetSuppressionOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutConfigurationSetSuppressionOptionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutConfigurationSetSuppressionOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand(input, context);
    };
    PutConfigurationSetSuppressionOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand(output, context);
    };
    return PutConfigurationSetSuppressionOptionsCommand;
}($Command));
export { PutConfigurationSetSuppressionOptionsCommand };
//# sourceMappingURL=PutConfigurationSetSuppressionOptionsCommand.js.map