import { __extends } from "tslib";
import { ListFindingsRequest, ListFindingsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListFindingsCommand, serializeAws_restJson1ListFindingsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a subset of information about one or more findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListFindingsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListFindingsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new ListFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFindingsCommandInput} for command's `input` shape.
 * @see {@link ListFindingsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFindingsCommand = /** @class */ (function (_super) {
    __extends(ListFindingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFindingsCommand(input) {
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
    ListFindingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "ListFindingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFindingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFindingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFindingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListFindingsCommand(input, context);
    };
    ListFindingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListFindingsCommand(output, context);
    };
    return ListFindingsCommand;
}($Command));
export { ListFindingsCommand };
//# sourceMappingURL=ListFindingsCommand.js.map