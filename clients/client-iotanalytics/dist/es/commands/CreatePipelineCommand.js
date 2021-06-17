import { __extends } from "tslib";
import { CreatePipelineRequest, CreatePipelineResponse } from "../models/models_0";
import { deserializeAws_restJson1CreatePipelineCommand, serializeAws_restJson1CreatePipelineCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a pipeline. A pipeline consumes messages from a channel and allows you to process
 *       the messages before storing them in a data store. You must specify both a <code>channel</code>
 *       and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in
 *       the <code>pipelineActivities</code> array.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, CreatePipelineCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, CreatePipelineCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new CreatePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePipelineCommandInput} for command's `input` shape.
 * @see {@link CreatePipelineCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "IoTAnalyticsClient";
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