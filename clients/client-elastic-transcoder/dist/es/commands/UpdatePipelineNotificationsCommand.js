import { __extends } from "tslib";
import { UpdatePipelineNotificationsRequest, UpdatePipelineNotificationsResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdatePipelineNotificationsCommand, serializeAws_restJson1UpdatePipelineNotificationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>With the UpdatePipelineNotifications operation, you can update Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline.</p>
 *         <p>When you update notifications for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, UpdatePipelineNotificationsCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, UpdatePipelineNotificationsCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new UpdatePipelineNotificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePipelineNotificationsCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineNotificationsCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePipelineNotificationsCommand = /** @class */ (function (_super) {
    __extends(UpdatePipelineNotificationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePipelineNotificationsCommand(input) {
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
    UpdatePipelineNotificationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticTranscoderClient";
        var commandName = "UpdatePipelineNotificationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePipelineNotificationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePipelineNotificationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePipelineNotificationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdatePipelineNotificationsCommand(input, context);
    };
    UpdatePipelineNotificationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdatePipelineNotificationsCommand(output, context);
    };
    return UpdatePipelineNotificationsCommand;
}($Command));
export { UpdatePipelineNotificationsCommand };
//# sourceMappingURL=UpdatePipelineNotificationsCommand.js.map