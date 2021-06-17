import { __extends } from "tslib";
import { ListContactListsRequest, ListContactListsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListContactListsCommand, serializeAws_restJson1ListContactListsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all of the contact lists available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListContactListsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListContactListsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new ListContactListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContactListsCommandInput} for command's `input` shape.
 * @see {@link ListContactListsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListContactListsCommand = /** @class */ (function (_super) {
    __extends(ListContactListsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListContactListsCommand(input) {
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
    ListContactListsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "ListContactListsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListContactListsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListContactListsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListContactListsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListContactListsCommand(input, context);
    };
    ListContactListsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListContactListsCommand(output, context);
    };
    return ListContactListsCommand;
}($Command));
export { ListContactListsCommand };
//# sourceMappingURL=ListContactListsCommand.js.map