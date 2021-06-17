import { __extends } from "tslib";
import { ListStatementsRequest, ListStatementsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListStatementsCommand, serializeAws_json1_1ListStatementsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List of SQL statements. By default, only finished statements are shown.
 *         A token is returned to page through the statement list. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, ListStatementsCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, ListStatementsCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * const client = new RedshiftDataClient(config);
 * const command = new ListStatementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStatementsCommandInput} for command's `input` shape.
 * @see {@link ListStatementsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStatementsCommand = /** @class */ (function (_super) {
    __extends(ListStatementsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListStatementsCommand(input) {
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
    ListStatementsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftDataClient";
        var commandName = "ListStatementsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListStatementsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListStatementsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListStatementsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListStatementsCommand(input, context);
    };
    ListStatementsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListStatementsCommand(output, context);
    };
    return ListStatementsCommand;
}($Command));
export { ListStatementsCommand };
//# sourceMappingURL=ListStatementsCommand.js.map