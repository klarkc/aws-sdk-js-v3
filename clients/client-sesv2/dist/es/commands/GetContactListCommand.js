import { __extends } from "tslib";
import { GetContactListRequest, GetContactListResponse } from "../models/models_0";
import { deserializeAws_restJson1GetContactListCommand, serializeAws_restJson1GetContactListCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns contact list metadata. It does not return any information about the contacts
 *             present in the list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetContactListCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetContactListCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new GetContactListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContactListCommandInput} for command's `input` shape.
 * @see {@link GetContactListCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetContactListCommand = /** @class */ (function (_super) {
    __extends(GetContactListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetContactListCommand(input) {
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
    GetContactListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "GetContactListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetContactListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetContactListResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetContactListCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetContactListCommand(input, context);
    };
    GetContactListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetContactListCommand(output, context);
    };
    return GetContactListCommand;
}($Command));
export { GetContactListCommand };
//# sourceMappingURL=GetContactListCommand.js.map