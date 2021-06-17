import { __extends } from "tslib";
import { ListTableColumnsRequest, ListTableColumnsResult } from "../models/models_0";
import { deserializeAws_restJson1ListTableColumnsCommand, serializeAws_restJson1ListTableColumnsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, ListTableColumnsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, ListTableColumnsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new ListTableColumnsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTableColumnsCommandInput} for command's `input` shape.
 * @see {@link ListTableColumnsCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTableColumnsCommand = /** @class */ (function (_super) {
    __extends(ListTableColumnsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTableColumnsCommand(input) {
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
    ListTableColumnsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HoneycodeClient";
        var commandName = "ListTableColumnsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTableColumnsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTableColumnsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTableColumnsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListTableColumnsCommand(input, context);
    };
    ListTableColumnsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListTableColumnsCommand(output, context);
    };
    return ListTableColumnsCommand;
}($Command));
export { ListTableColumnsCommand };
//# sourceMappingURL=ListTableColumnsCommand.js.map