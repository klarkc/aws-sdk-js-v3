import { __extends } from "tslib";
import { DeletePipelineRequest, DeletePipelineResponse } from "../models/models_0";
import { deserializeAws_restJson1DeletePipelineCommand, serializeAws_restJson1DeletePipelineCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The DeletePipeline operation removes a pipeline.</p>
 *         <p> You can only delete a pipeline that has never been used or that is not currently in use
 *             (doesn't contain any active jobs). If the pipeline is currently in use,
 *                 <code>DeletePipeline</code> returns an error. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, DeletePipelineCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, DeletePipelineCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new DeletePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePipelineCommandInput} for command's `input` shape.
 * @see {@link DeletePipelineCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePipelineCommand = /** @class */ (function (_super) {
    __extends(DeletePipelineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePipelineCommand(input) {
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
    DeletePipelineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticTranscoderClient";
        var commandName = "DeletePipelineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePipelineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePipelineResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePipelineCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeletePipelineCommand(input, context);
    };
    DeletePipelineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeletePipelineCommand(output, context);
    };
    return DeletePipelineCommand;
}($Command));
export { DeletePipelineCommand };
//# sourceMappingURL=DeletePipelineCommand.js.map