import { __extends } from "tslib";
import { ListJobsByPipelineRequest, ListJobsByPipelineResponse } from "../models/models_0";
import { deserializeAws_restJson1ListJobsByPipelineCommand, serializeAws_restJson1ListJobsByPipelineCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The ListJobsByPipeline operation gets a list of the jobs currently in a pipeline.</p>
 *         <p>Elastic Transcoder returns all of the jobs currently in the specified pipeline. The response body contains
 *             one element for each job that satisfies the search criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ListJobsByPipelineCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ListJobsByPipelineCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new ListJobsByPipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJobsByPipelineCommandInput} for command's `input` shape.
 * @see {@link ListJobsByPipelineCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListJobsByPipelineCommand = /** @class */ (function (_super) {
    __extends(ListJobsByPipelineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListJobsByPipelineCommand(input) {
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
    ListJobsByPipelineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticTranscoderClient";
        var commandName = "ListJobsByPipelineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListJobsByPipelineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListJobsByPipelineResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListJobsByPipelineCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListJobsByPipelineCommand(input, context);
    };
    ListJobsByPipelineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListJobsByPipelineCommand(output, context);
    };
    return ListJobsByPipelineCommand;
}($Command));
export { ListJobsByPipelineCommand };
//# sourceMappingURL=ListJobsByPipelineCommand.js.map