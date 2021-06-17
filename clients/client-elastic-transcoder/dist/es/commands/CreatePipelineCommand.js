import { __extends } from "tslib";
import { CreatePipelineRequest, CreatePipelineResponse } from "../models/models_0";
import { deserializeAws_restJson1CreatePipelineCommand, serializeAws_restJson1CreatePipelineCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The CreatePipeline operation creates a pipeline with settings that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, CreatePipelineCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, CreatePipelineCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new CreatePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePipelineCommandInput} for command's `input` shape.
 * @see {@link CreatePipelineCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePipelineCommand = /** @class */ (function (_super) {
    __extends(CreatePipelineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePipelineCommand(input) {
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
    CreatePipelineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticTranscoderClient";
        var commandName = "CreatePipelineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePipelineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePipelineResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePipelineCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreatePipelineCommand(input, context);
    };
    CreatePipelineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreatePipelineCommand(output, context);
    };
    return CreatePipelineCommand;
}($Command));
export { CreatePipelineCommand };
//# sourceMappingURL=CreatePipelineCommand.js.map