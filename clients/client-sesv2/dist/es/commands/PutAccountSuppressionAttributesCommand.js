import { __extends } from "tslib";
import { PutAccountSuppressionAttributesRequest, PutAccountSuppressionAttributesResponse } from "../models/models_0";
import { deserializeAws_restJson1PutAccountSuppressionAttributesCommand, serializeAws_restJson1PutAccountSuppressionAttributesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Change the settings for the account-level suppression list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutAccountSuppressionAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutAccountSuppressionAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutAccountSuppressionAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccountSuppressionAttributesCommandInput} for command's `input` shape.
 * @see {@link PutAccountSuppressionAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutAccountSuppressionAttributesCommand = /** @class */ (function (_super) {
    __extends(PutAccountSuppressionAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutAccountSuppressionAttributesCommand(input) {
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
    PutAccountSuppressionAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "PutAccountSuppressionAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutAccountSuppressionAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutAccountSuppressionAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutAccountSuppressionAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutAccountSuppressionAttributesCommand(input, context);
    };
    PutAccountSuppressionAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutAccountSuppressionAttributesCommand(output, context);
    };
    return PutAccountSuppressionAttributesCommand;
}($Command));
export { PutAccountSuppressionAttributesCommand };
//# sourceMappingURL=PutAccountSuppressionAttributesCommand.js.map