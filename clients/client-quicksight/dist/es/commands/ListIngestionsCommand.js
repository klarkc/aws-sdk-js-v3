import { __extends } from "tslib";
import { ListIngestionsRequest, ListIngestionsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListIngestionsCommand, serializeAws_restJson1ListIngestionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the history of SPICE ingestions for a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListIngestionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListIngestionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListIngestionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIngestionsCommandInput} for command's `input` shape.
 * @see {@link ListIngestionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListIngestionsCommand = /** @class */ (function (_super) {
    __extends(ListIngestionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListIngestionsCommand(input) {
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
    ListIngestionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "ListIngestionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListIngestionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListIngestionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListIngestionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListIngestionsCommand(input, context);
    };
    ListIngestionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListIngestionsCommand(output, context);
    };
    return ListIngestionsCommand;
}($Command));
export { ListIngestionsCommand };
//# sourceMappingURL=ListIngestionsCommand.js.map