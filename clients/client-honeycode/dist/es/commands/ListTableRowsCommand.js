import { __extends } from "tslib";
import { ListTableRowsRequest, ListTableRowsResult } from "../models/models_0";
import { deserializeAws_restJson1ListTableRowsCommand, serializeAws_restJson1ListTableRowsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The ListTableRows API allows you to retrieve a list of all the rows in a table in a workbook.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, ListTableRowsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, ListTableRowsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new ListTableRowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTableRowsCommandInput} for command's `input` shape.
 * @see {@link ListTableRowsCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTableRowsCommand = /** @class */ (function (_super) {
    __extends(ListTableRowsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTableRowsCommand(input) {
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
    ListTableRowsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HoneycodeClient";
        var commandName = "ListTableRowsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTableRowsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTableRowsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTableRowsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListTableRowsCommand(input, context);
    };
    ListTableRowsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListTableRowsCommand(output, context);
    };
    return ListTableRowsCommand;
}($Command));
export { ListTableRowsCommand };
//# sourceMappingURL=ListTableRowsCommand.js.map