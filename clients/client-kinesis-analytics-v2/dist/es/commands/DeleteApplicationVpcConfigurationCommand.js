import { __extends } from "tslib";
import { DeleteApplicationVpcConfigurationRequest, DeleteApplicationVpcConfigurationResponse, } from "../models/models_0";
import { deserializeAws_json1_1DeleteApplicationVpcConfigurationCommand, serializeAws_json1_1DeleteApplicationVpcConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a VPC configuration from a Kinesis Data Analytics application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DeleteApplicationVpcConfigurationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DeleteApplicationVpcConfigurationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new DeleteApplicationVpcConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationVpcConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationVpcConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteApplicationVpcConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeleteApplicationVpcConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteApplicationVpcConfigurationCommand(input) {
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
    DeleteApplicationVpcConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsV2Client";
        var commandName = "DeleteApplicationVpcConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteApplicationVpcConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteApplicationVpcConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteApplicationVpcConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteApplicationVpcConfigurationCommand(input, context);
    };
    DeleteApplicationVpcConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteApplicationVpcConfigurationCommand(output, context);
    };
    return DeleteApplicationVpcConfigurationCommand;
}($Command));
export { DeleteApplicationVpcConfigurationCommand };
//# sourceMappingURL=DeleteApplicationVpcConfigurationCommand.js.map