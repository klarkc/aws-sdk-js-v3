import { __extends } from "tslib";
import { UpdatePipelineRequest, UpdatePipelineResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdatePipelineCommand, serializeAws_restJson1UpdatePipelineCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Use the <code>UpdatePipeline</code> operation to update settings for a pipeline.</p>
 *         <important>
 *             <p>When you change pipeline settings, your changes take effect immediately.
 *             Jobs that you have already submitted and that Elastic Transcoder has not started to process are
 *             affected in addition to jobs that you submit after you change settings. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, UpdatePipelineCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, UpdatePipelineCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new UpdatePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePipelineCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePipelineCommand = /** @class */ (function (_super) {
    __extends(UpdatePipelineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePipelineCommand(input) {
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
    UpdatePipelineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticTranscoderClient";
        var commandName = "UpdatePipelineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePipelineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePipelineResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePipelineCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdatePipelineCommand(input, context);
    };
    UpdatePipelineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdatePipelineCommand(output, context);
    };
    return UpdatePipelineCommand;
}($Command));
export { UpdatePipelineCommand };
//# sourceMappingURL=UpdatePipelineCommand.js.map