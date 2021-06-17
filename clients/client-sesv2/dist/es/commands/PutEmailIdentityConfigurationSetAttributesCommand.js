import { __extends } from "tslib";
import { PutEmailIdentityConfigurationSetAttributesRequest, PutEmailIdentityConfigurationSetAttributesResponse, } from "../models/models_0";
import { deserializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand, serializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Used to associate a configuration set with an email identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutEmailIdentityConfigurationSetAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutEmailIdentityConfigurationSetAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutEmailIdentityConfigurationSetAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEmailIdentityConfigurationSetAttributesCommandInput} for command's `input` shape.
 * @see {@link PutEmailIdentityConfigurationSetAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutEmailIdentityConfigurationSetAttributesCommand = /** @class */ (function (_super) {
    __extends(PutEmailIdentityConfigurationSetAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutEmailIdentityConfigurationSetAttributesCommand(input) {
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
    PutEmailIdentityConfigurationSetAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "PutEmailIdentityConfigurationSetAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutEmailIdentityConfigurationSetAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutEmailIdentityConfigurationSetAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutEmailIdentityConfigurationSetAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand(input, context);
    };
    PutEmailIdentityConfigurationSetAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand(output, context);
    };
    return PutEmailIdentityConfigurationSetAttributesCommand;
}($Command));
export { PutEmailIdentityConfigurationSetAttributesCommand };
//# sourceMappingURL=PutEmailIdentityConfigurationSetAttributesCommand.js.map