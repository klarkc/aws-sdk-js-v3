import { __extends } from "tslib";
import { ListCustomDataIdentifiersRequest, ListCustomDataIdentifiersResponse } from "../models/models_0";
import { deserializeAws_restJson1ListCustomDataIdentifiersCommand, serializeAws_restJson1ListCustomDataIdentifiersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a subset of information about all the custom data identifiers for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListCustomDataIdentifiersCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListCustomDataIdentifiersCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new ListCustomDataIdentifiersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCustomDataIdentifiersCommandInput} for command's `input` shape.
 * @see {@link ListCustomDataIdentifiersCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCustomDataIdentifiersCommand = /** @class */ (function (_super) {
    __extends(ListCustomDataIdentifiersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCustomDataIdentifiersCommand(input) {
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
    ListCustomDataIdentifiersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "ListCustomDataIdentifiersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCustomDataIdentifiersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCustomDataIdentifiersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCustomDataIdentifiersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListCustomDataIdentifiersCommand(input, context);
    };
    ListCustomDataIdentifiersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListCustomDataIdentifiersCommand(output, context);
    };
    return ListCustomDataIdentifiersCommand;
}($Command));
export { ListCustomDataIdentifiersCommand };
//# sourceMappingURL=ListCustomDataIdentifiersCommand.js.map