import { __extends } from "tslib";
import { ListTablesRequest, ListTablesResult } from "../models/models_0";
import { deserializeAws_restJson1ListTablesCommand, serializeAws_restJson1ListTablesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The ListTables API allows you to retrieve a list of all the tables in a workbook.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, ListTablesCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, ListTablesCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new ListTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTablesCommandInput} for command's `input` shape.
 * @see {@link ListTablesCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTablesCommand = /** @class */ (function (_super) {
    __extends(ListTablesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTablesCommand(input) {
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
    ListTablesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HoneycodeClient";
        var commandName = "ListTablesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTablesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTablesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTablesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListTablesCommand(input, context);
    };
    ListTablesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListTablesCommand(output, context);
    };
    return ListTablesCommand;
}($Command));
export { ListTablesCommand };
//# sourceMappingURL=ListTablesCommand.js.map