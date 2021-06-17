import { __extends } from "tslib";
import { PutEmailIdentityMailFromAttributesRequest, PutEmailIdentityMailFromAttributesResponse, } from "../models/models_0";
import { deserializeAws_restJson1PutEmailIdentityMailFromAttributesCommand, serializeAws_restJson1PutEmailIdentityMailFromAttributesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Used to enable or disable the custom Mail-From domain configuration for an email
 *             identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutEmailIdentityMailFromAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutEmailIdentityMailFromAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutEmailIdentityMailFromAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEmailIdentityMailFromAttributesCommandInput} for command's `input` shape.
 * @see {@link PutEmailIdentityMailFromAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutEmailIdentityMailFromAttributesCommand = /** @class */ (function (_super) {
    __extends(PutEmailIdentityMailFromAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutEmailIdentityMailFromAttributesCommand(input) {
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
    PutEmailIdentityMailFromAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "PutEmailIdentityMailFromAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutEmailIdentityMailFromAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutEmailIdentityMailFromAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutEmailIdentityMailFromAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutEmailIdentityMailFromAttributesCommand(input, context);
    };
    PutEmailIdentityMailFromAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutEmailIdentityMailFromAttributesCommand(output, context);
    };
    return PutEmailIdentityMailFromAttributesCommand;
}($Command));
export { PutEmailIdentityMailFromAttributesCommand };
//# sourceMappingURL=PutEmailIdentityMailFromAttributesCommand.js.map