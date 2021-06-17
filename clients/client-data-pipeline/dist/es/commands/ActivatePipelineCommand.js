import { __extends } from "tslib";
import { ActivatePipelineInput, ActivatePipelineOutput } from "../models/models_0";
import { deserializeAws_json1_1ActivatePipelineCommand, serializeAws_json1_1ActivatePipelineCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation,
 *            activation fails.</p>
 *         <p>If you need to pause the pipeline to investigate an issue with a component, such as a data source or script,
 *            call <a>DeactivatePipeline</a>.</p>
 *         <p>To activate a finished pipeline, modify the end date for the pipeline and then activate it.</p>
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.ActivatePipeline
 * Content-Length: 39
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * {"pipelineId": "df-06372391ZG65EXAMPLE"}
 *
 *             </request>
 *             <response>
 *
 * HTTP/1.1 200
 * x-amzn-RequestId: ee19d5bf-074e-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 2
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * {}
 *
 *             </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, ActivatePipelineCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, ActivatePipelineCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const command = new ActivatePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ActivatePipelineCommandInput} for command's `input` shape.
 * @see {@link ActivatePipelineCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ActivatePipelineCommand = /** @class */ (function (_super) {
    __extends(ActivatePipelineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ActivatePipelineCommand(input) {
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
    ActivatePipelineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataPipelineClient";
        var commandName = "ActivatePipelineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ActivatePipelineInput.filterSensitiveLog,
            outputFilterSensitiveLog: ActivatePipelineOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ActivatePipelineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ActivatePipelineCommand(input, context);
    };
    ActivatePipelineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ActivatePipelineCommand(output, context);
    };
    return ActivatePipelineCommand;
}($Command));
export { ActivatePipelineCommand };
//# sourceMappingURL=ActivatePipelineCommand.js.map