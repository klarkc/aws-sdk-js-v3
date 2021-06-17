import { __extends } from "tslib";
import { DeactivatePipelineInput, DeactivatePipelineOutput } from "../models/models_0";
import { deserializeAws_json1_1DeactivatePipelineCommand, serializeAws_json1_1DeactivatePipelineCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deactivates the specified running pipeline. The pipeline is set to the <code>DEACTIVATING</code>
 *           state until the deactivation process completes.</p>
 *         <p>To resume a deactivated pipeline, use <a>ActivatePipeline</a>. By default, the pipeline resumes from the last completed execution.
 *           Optionally, you can specify the date and time to resume the pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, DeactivatePipelineCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, DeactivatePipelineCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const command = new DeactivatePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeactivatePipelineCommandInput} for command's `input` shape.
 * @see {@link DeactivatePipelineCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeactivatePipelineCommand = /** @class */ (function (_super) {
    __extends(DeactivatePipelineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeactivatePipelineCommand(input) {
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
    DeactivatePipelineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataPipelineClient";
        var commandName = "DeactivatePipelineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeactivatePipelineInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeactivatePipelineOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeactivatePipelineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeactivatePipelineCommand(input, context);
    };
    DeactivatePipelineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeactivatePipelineCommand(output, context);
    };
    return DeactivatePipelineCommand;
}($Command));
export { DeactivatePipelineCommand };
//# sourceMappingURL=DeactivatePipelineCommand.js.map