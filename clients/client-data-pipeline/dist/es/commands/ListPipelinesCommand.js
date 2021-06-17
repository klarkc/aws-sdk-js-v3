import { __extends } from "tslib";
import { ListPipelinesInput, ListPipelinesOutput } from "../models/models_0";
import { deserializeAws_json1_1ListPipelinesCommand, serializeAws_json1_1ListPipelinesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the pipeline identifiers for all active pipelines that you have permission to access.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.ListPipelines
 * Content-Length: 14
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * {}</request>
 *
 *             <response>
 *
 * Status:
 * x-amzn-RequestId: b3104dc5-0734-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 39
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * {"PipelineIdList":
 *   [
 *     {"id": "df-08785951KAKJEXAMPLE",
 *      "name": "MyPipeline"},
 *     {"id": "df-08662578ISYEXAMPLE",
 *      "name": "MySecondPipeline"}
 *   ]
 * }</response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, ListPipelinesCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, ListPipelinesCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const command = new ListPipelinesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPipelinesCommandInput} for command's `input` shape.
 * @see {@link ListPipelinesCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPipelinesCommand = /** @class */ (function (_super) {
    __extends(ListPipelinesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPipelinesCommand(input) {
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
    ListPipelinesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataPipelineClient";
        var commandName = "ListPipelinesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPipelinesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListPipelinesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPipelinesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPipelinesCommand(input, context);
    };
    ListPipelinesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPipelinesCommand(output, context);
    };
    return ListPipelinesCommand;
}($Command));
export { ListPipelinesCommand };
//# sourceMappingURL=ListPipelinesCommand.js.map