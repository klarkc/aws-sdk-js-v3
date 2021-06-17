import { __extends } from "tslib";
import { ReportTaskRunnerHeartbeatInput, ReportTaskRunnerHeartbeatOutput } from "../models/models_0";
import { deserializeAws_json1_1ReportTaskRunnerHeartbeatCommand, serializeAws_json1_1ReportTaskRunnerHeartbeatCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Task runners call <code>ReportTaskRunnerHeartbeat</code> every 15 minutes to indicate that they are operational.
 *             If the AWS Data Pipeline Task Runner is launched on a resource managed by AWS Data Pipeline, the web service can use
 *             this call to detect when the task runner application has failed and restart a new instance.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.ReportTaskRunnerHeartbeat
 * Content-Length: 84
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * {"taskrunnerId": "1234567890",
 *  "workerGroup": "wg-12345",
 *  "hostname": "example.com"}
 *
 *             </request>
 *
 *             <response>
 *
 * Status:
 * x-amzn-RequestId: b3104dc5-0734-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 20
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * {"terminate": false}
 *
 *             </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, ReportTaskRunnerHeartbeatCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, ReportTaskRunnerHeartbeatCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const command = new ReportTaskRunnerHeartbeatCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReportTaskRunnerHeartbeatCommandInput} for command's `input` shape.
 * @see {@link ReportTaskRunnerHeartbeatCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ReportTaskRunnerHeartbeatCommand = /** @class */ (function (_super) {
    __extends(ReportTaskRunnerHeartbeatCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ReportTaskRunnerHeartbeatCommand(input) {
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
    ReportTaskRunnerHeartbeatCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataPipelineClient";
        var commandName = "ReportTaskRunnerHeartbeatCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ReportTaskRunnerHeartbeatInput.filterSensitiveLog,
            outputFilterSensitiveLog: ReportTaskRunnerHeartbeatOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ReportTaskRunnerHeartbeatCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ReportTaskRunnerHeartbeatCommand(input, context);
    };
    ReportTaskRunnerHeartbeatCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ReportTaskRunnerHeartbeatCommand(output, context);
    };
    return ReportTaskRunnerHeartbeatCommand;
}($Command));
export { ReportTaskRunnerHeartbeatCommand };
//# sourceMappingURL=ReportTaskRunnerHeartbeatCommand.js.map