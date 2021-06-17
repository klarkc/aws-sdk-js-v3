import { __extends } from "tslib";
import { ListPhoneNumbersRequest, ListPhoneNumbersResponse } from "../models/models_0";
import { deserializeAws_restJson1ListPhoneNumbersCommand, serializeAws_restJson1ListPhoneNumbersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides information about the phone numbers for the specified Amazon Connect instance. </p>
 *          <p>For more information about phone numbers, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-center-phone-number.html">Set Up Phone Numbers for Your
 *     Contact Center</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListPhoneNumbersCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListPhoneNumbersCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListPhoneNumbersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPhoneNumbersCommandInput} for command's `input` shape.
 * @see {@link ListPhoneNumbersCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPhoneNumbersCommand = /** @class */ (function (_super) {
    __extends(ListPhoneNumbersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPhoneNumbersCommand(input) {
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
    ListPhoneNumbersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "ListPhoneNumbersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPhoneNumbersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPhoneNumbersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPhoneNumbersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPhoneNumbersCommand(input, context);
    };
    ListPhoneNumbersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPhoneNumbersCommand(output, context);
    };
    return ListPhoneNumbersCommand;
}($Command));
export { ListPhoneNumbersCommand };
//# sourceMappingURL=ListPhoneNumbersCommand.js.map