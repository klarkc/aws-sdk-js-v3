import { __extends } from "tslib";
import { ListProfileTimesRequest, ListProfileTimesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListProfileTimesCommand, serializeAws_restJson1ListProfileTimesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the start times of the available aggregated profiles of a profiling group
 *         for an aggregation period within the specified time range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, ListProfileTimesCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, ListProfileTimesCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new ListProfileTimesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProfileTimesCommandInput} for command's `input` shape.
 * @see {@link ListProfileTimesCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProfileTimesCommand = /** @class */ (function (_super) {
    __extends(ListProfileTimesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProfileTimesCommand(input) {
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
    ListProfileTimesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruProfilerClient";
        var commandName = "ListProfileTimesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProfileTimesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListProfileTimesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProfileTimesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListProfileTimesCommand(input, context);
    };
    ListProfileTimesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListProfileTimesCommand(output, context);
    };
    return ListProfileTimesCommand;
}($Command));
export { ListProfileTimesCommand };
//# sourceMappingURL=ListProfileTimesCommand.js.map