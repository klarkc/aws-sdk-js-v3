import { __extends } from "tslib";
import { CreateJobRequest, CreateJobResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateJobCommand, serializeAws_restJson1CreateJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>When you create a job, Elastic Transcoder returns JSON data that includes the values that you specified
 *             plus information about the job that is created.</p>
 *         <p>If you have specified more than one output for your jobs (for example, one output for the
 *             Kindle Fire and another output for the Apple iPhone 4s), you currently must use the Elastic Transcoder API to
 *             list the jobs (as opposed to the AWS Console).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, CreateJobCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, CreateJobCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new CreateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateJobCommandInput} for command's `input` shape.
 * @see {@link CreateJobCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateJobCommand = /** @class */ (function (_super) {
    __extends(CreateJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateJobCommand(input) {
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
    CreateJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticTranscoderClient";
        var commandName = "CreateJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateJobCommand(input, context);
    };
    CreateJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateJobCommand(output, context);
    };
    return CreateJobCommand;
}($Command));
export { CreateJobCommand };
//# sourceMappingURL=CreateJobCommand.js.map