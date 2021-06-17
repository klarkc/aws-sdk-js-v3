import { __extends } from "tslib";
import { UpdatePipelineStatusRequest, UpdatePipelineStatusResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdatePipelineStatusCommand, serializeAws_restJson1UpdatePipelineStatusCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline
 *             stops or restarts the processing of jobs.</p>
 *         <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't
 *             cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which
 *             you submitted the jobs, you have more time to get the job IDs for the jobs that you want
 *             to cancel, and to send a <a>CancelJob</a> request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, UpdatePipelineStatusCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, UpdatePipelineStatusCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new UpdatePipelineStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePipelineStatusCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineStatusCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePipelineStatusCommand = /** @class */ (function (_super) {
    __extends(UpdatePipelineStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePipelineStatusCommand(input) {
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
    UpdatePipelineStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticTranscoderClient";
        var commandName = "UpdatePipelineStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePipelineStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePipelineStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePipelineStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdatePipelineStatusCommand(input, context);
    };
    UpdatePipelineStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdatePipelineStatusCommand(output, context);
    };
    return UpdatePipelineStatusCommand;
}($Command));
export { UpdatePipelineStatusCommand };
//# sourceMappingURL=UpdatePipelineStatusCommand.js.map