import { __extends } from "tslib";
import { GetPipelineDefinitionInput, GetPipelineDefinitionOutput } from "../models/models_0";
import { deserializeAws_json1_1GetPipelineDefinitionCommand, serializeAws_json1_1GetPipelineDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the definition of the specified pipeline. You can call <code>GetPipelineDefinition</code> to retrieve
 *             the pipeline definition that you provided using <a>PutPipelineDefinition</a>.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.GetPipelineDefinition
 * Content-Length: 40
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 *
 * {"pipelineId": "df-06372391ZG65EXAMPLE"}
 *
 *             </request>
 *             <response>
 *
 * x-amzn-RequestId: e28309e5-0776-11e2-8a14-21bb8a1f50ef
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 890
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * {"pipelineObjects":
 *   [
 *     {"fields":
 *       [
 *         {"key": "workerGroup",
 *          "stringValue": "workerGroup"}
 *       ],
 *      "id": "Default",
 *      "name": "Default"},
 *     {"fields":
 *       [
 *         {"key": "startDateTime",
 *          "stringValue": "2012-09-25T17:00:00"},
 *         {"key": "type",
 *          "stringValue": "Schedule"},
 *         {"key": "period",
 *          "stringValue": "1 hour"},
 *         {"key": "endDateTime",
 *          "stringValue": "2012-09-25T18:00:00"}
 *       ],
 *      "id": "Schedule",
 *      "name": "Schedule"},
 *     {"fields":
 *       [
 *         {"key": "schedule",
 *          "refValue": "Schedule"},
 *         {"key": "command",
 *          "stringValue": "echo hello"},
 *         {"key": "parent",
 *          "refValue": "Default"},
 *         {"key": "type",
 *          "stringValue": "ShellCommandActivity"}
 *       ],
 *      "id": "SayHello",
 *      "name": "SayHello"}
 *   ]
 * }
 *
 *             </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, GetPipelineDefinitionCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, GetPipelineDefinitionCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const command = new GetPipelineDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPipelineDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetPipelineDefinitionCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPipelineDefinitionCommand = /** @class */ (function (_super) {
    __extends(GetPipelineDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPipelineDefinitionCommand(input) {
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
    GetPipelineDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataPipelineClient";
        var commandName = "GetPipelineDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPipelineDefinitionInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetPipelineDefinitionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPipelineDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetPipelineDefinitionCommand(input, context);
    };
    GetPipelineDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetPipelineDefinitionCommand(output, context);
    };
    return GetPipelineDefinitionCommand;
}($Command));
export { GetPipelineDefinitionCommand };
//# sourceMappingURL=GetPipelineDefinitionCommand.js.map