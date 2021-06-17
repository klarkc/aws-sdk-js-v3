import { __extends } from "tslib";
import { GetFindingsReportAccountSummaryRequest, GetFindingsReportAccountSummaryResponse } from "../models/models_0";
import { deserializeAws_restJson1GetFindingsReportAccountSummaryCommand, serializeAws_restJson1GetFindingsReportAccountSummaryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             Returns a list of
 *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html">
 *                <code>FindingsReportSummary</code>
 *             </a>
 *             objects that contain analysis results for all profiling groups in your AWS account.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, GetFindingsReportAccountSummaryCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, GetFindingsReportAccountSummaryCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new GetFindingsReportAccountSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFindingsReportAccountSummaryCommandInput} for command's `input` shape.
 * @see {@link GetFindingsReportAccountSummaryCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFindingsReportAccountSummaryCommand = /** @class */ (function (_super) {
    __extends(GetFindingsReportAccountSummaryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFindingsReportAccountSummaryCommand(input) {
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
    GetFindingsReportAccountSummaryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruProfilerClient";
        var commandName = "GetFindingsReportAccountSummaryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFindingsReportAccountSummaryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFindingsReportAccountSummaryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFindingsReportAccountSummaryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetFindingsReportAccountSummaryCommand(input, context);
    };
    GetFindingsReportAccountSummaryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetFindingsReportAccountSummaryCommand(output, context);
    };
    return GetFindingsReportAccountSummaryCommand;
}($Command));
export { GetFindingsReportAccountSummaryCommand };
//# sourceMappingURL=GetFindingsReportAccountSummaryCommand.js.map