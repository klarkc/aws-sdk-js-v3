import { __extends } from "tslib";
import { ListLedgersRequest, ListLedgersResponse } from "../models/models_0";
import { deserializeAws_restJson1ListLedgersCommand, serializeAws_restJson1ListLedgersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an array of ledger summaries that are associated with the current AWS account
 *          and Region.</p>
 *          <p>This action returns a maximum of 100 items and is paginated so that you can
 *          retrieve all the items by calling <code>ListLedgers</code> multiple times.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, ListLedgersCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, ListLedgersCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new ListLedgersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLedgersCommandInput} for command's `input` shape.
 * @see {@link ListLedgersCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLedgersCommand = /** @class */ (function (_super) {
    __extends(ListLedgersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLedgersCommand(input) {
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
    ListLedgersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QLDBClient";
        var commandName = "ListLedgersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLedgersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListLedgersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLedgersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListLedgersCommand(input, context);
    };
    ListLedgersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListLedgersCommand(output, context);
    };
    return ListLedgersCommand;
}($Command));
export { ListLedgersCommand };
//# sourceMappingURL=ListLedgersCommand.js.map