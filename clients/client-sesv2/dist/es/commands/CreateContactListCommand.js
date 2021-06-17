import { __extends } from "tslib";
import { CreateContactListRequest, CreateContactListResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateContactListCommand, serializeAws_restJson1CreateContactListCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a contact list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateContactListCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateContactListCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new CreateContactListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContactListCommandInput} for command's `input` shape.
 * @see {@link CreateContactListCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateContactListCommand = /** @class */ (function (_super) {
    __extends(CreateContactListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateContactListCommand(input) {
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
    CreateContactListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "CreateContactListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateContactListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateContactListResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateContactListCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateContactListCommand(input, context);
    };
    CreateContactListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateContactListCommand(output, context);
    };
    return CreateContactListCommand;
}($Command));
export { CreateContactListCommand };
//# sourceMappingURL=CreateContactListCommand.js.map