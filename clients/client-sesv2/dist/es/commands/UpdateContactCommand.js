import { __extends } from "tslib";
import { UpdateContactRequest, UpdateContactResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateContactCommand, serializeAws_restJson1UpdateContactCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a contact's preferences for a list. It is not necessary to specify all
 *             existing topic preferences in the TopicPreferences object, just the ones that need
 *             updating.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, UpdateContactCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, UpdateContactCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new UpdateContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContactCommandInput} for command's `input` shape.
 * @see {@link UpdateContactCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateContactCommand = /** @class */ (function (_super) {
    __extends(UpdateContactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateContactCommand(input) {
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
    UpdateContactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "UpdateContactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateContactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateContactResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateContactCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateContactCommand(input, context);
    };
    UpdateContactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateContactCommand(output, context);
    };
    return UpdateContactCommand;
}($Command));
export { UpdateContactCommand };
//# sourceMappingURL=UpdateContactCommand.js.map