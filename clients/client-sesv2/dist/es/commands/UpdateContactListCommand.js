import { __extends } from "tslib";
import { UpdateContactListRequest, UpdateContactListResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateContactListCommand, serializeAws_restJson1UpdateContactListCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates contact list metadata. This operation does a complete replacement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, UpdateContactListCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, UpdateContactListCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new UpdateContactListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContactListCommandInput} for command's `input` shape.
 * @see {@link UpdateContactListCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateContactListCommand = /** @class */ (function (_super) {
    __extends(UpdateContactListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateContactListCommand(input) {
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
    UpdateContactListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "UpdateContactListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateContactListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateContactListResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateContactListCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateContactListCommand(input, context);
    };
    UpdateContactListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateContactListCommand(output, context);
    };
    return UpdateContactListCommand;
}($Command));
export { UpdateContactListCommand };
//# sourceMappingURL=UpdateContactListCommand.js.map