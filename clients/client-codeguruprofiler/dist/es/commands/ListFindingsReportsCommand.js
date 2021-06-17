import { __extends } from "tslib";
import { ListFindingsReportsRequest, ListFindingsReportsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListFindingsReportsCommand, serializeAws_restJson1ListFindingsReportsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the available reports for a given profiling group and time range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, ListFindingsReportsCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, ListFindingsReportsCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new ListFindingsReportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFindingsReportsCommandInput} for command's `input` shape.
 * @see {@link ListFindingsReportsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFindingsReportsCommand = /** @class */ (function (_super) {
    __extends(ListFindingsReportsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFindingsReportsCommand(input) {
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
    ListFindingsReportsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruProfilerClient";
        var commandName = "ListFindingsReportsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFindingsReportsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFindingsReportsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFindingsReportsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListFindingsReportsCommand(input, context);
    };
    ListFindingsReportsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListFindingsReportsCommand(output, context);
    };
    return ListFindingsReportsCommand;
}($Command));
export { ListFindingsReportsCommand };
//# sourceMappingURL=ListFindingsReportsCommand.js.map