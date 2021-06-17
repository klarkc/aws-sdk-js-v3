import { __extends } from "tslib";
import { ReadPipelineRequest, ReadPipelineResponse } from "../models/models_0";
import { deserializeAws_restJson1ReadPipelineCommand, serializeAws_restJson1ReadPipelineCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The ReadPipeline operation gets detailed information about a pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ReadPipelineCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ReadPipelineCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new ReadPipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReadPipelineCommandInput} for command's `input` shape.
 * @see {@link ReadPipelineCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ReadPipelineCommand = /** @class */ (function (_super) {
    __extends(ReadPipelineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ReadPipelineCommand(input) {
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
    ReadPipelineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticTranscoderClient";
        var commandName = "ReadPipelineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ReadPipelineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ReadPipelineResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ReadPipelineCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ReadPipelineCommand(input, context);
    };
    ReadPipelineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ReadPipelineCommand(output, context);
    };
    return ReadPipelineCommand;
}($Command));
export { ReadPipelineCommand };
//# sourceMappingURL=ReadPipelineCommand.js.map