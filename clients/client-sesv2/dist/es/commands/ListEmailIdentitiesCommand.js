import { __extends } from "tslib";
import { ListEmailIdentitiesRequest, ListEmailIdentitiesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListEmailIdentitiesCommand, serializeAws_restJson1ListEmailIdentitiesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of all of the email identities that are associated with your AWS
 *             account. An identity can be either an email address or a domain. This operation returns
 *             identities that are verified as well as those that aren't. This operation returns
 *             identities that are associated with Amazon SES and Amazon Pinpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListEmailIdentitiesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListEmailIdentitiesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new ListEmailIdentitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEmailIdentitiesCommandInput} for command's `input` shape.
 * @see {@link ListEmailIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEmailIdentitiesCommand = /** @class */ (function (_super) {
    __extends(ListEmailIdentitiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEmailIdentitiesCommand(input) {
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
    ListEmailIdentitiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "ListEmailIdentitiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEmailIdentitiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListEmailIdentitiesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEmailIdentitiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListEmailIdentitiesCommand(input, context);
    };
    ListEmailIdentitiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListEmailIdentitiesCommand(output, context);
    };
    return ListEmailIdentitiesCommand;
}($Command));
export { ListEmailIdentitiesCommand };
//# sourceMappingURL=ListEmailIdentitiesCommand.js.map