import { __extends } from "tslib";
import { PutAccountDetailsRequest, PutAccountDetailsResponse } from "../models/models_0";
import { deserializeAws_restJson1PutAccountDetailsCommand, serializeAws_restJson1PutAccountDetailsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update your Amazon SES account details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutAccountDetailsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutAccountDetailsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutAccountDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccountDetailsCommandInput} for command's `input` shape.
 * @see {@link PutAccountDetailsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutAccountDetailsCommand = /** @class */ (function (_super) {
    __extends(PutAccountDetailsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutAccountDetailsCommand(input) {
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
    PutAccountDetailsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "PutAccountDetailsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutAccountDetailsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutAccountDetailsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutAccountDetailsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutAccountDetailsCommand(input, context);
    };
    PutAccountDetailsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutAccountDetailsCommand(output, context);
    };
    return PutAccountDetailsCommand;
}($Command));
export { PutAccountDetailsCommand };
//# sourceMappingURL=PutAccountDetailsCommand.js.map