import { __extends } from "tslib";
import { DeleteApplicationInputProcessingConfigurationRequest, DeleteApplicationInputProcessingConfigurationResponse, } from "../models/models_0";
import { deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand, serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Deletes an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> from an input.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, DeleteApplicationInputProcessingConfigurationCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, DeleteApplicationInputProcessingConfigurationCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * const client = new KinesisAnalyticsClient(config);
 * const command = new DeleteApplicationInputProcessingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationInputProcessingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationInputProcessingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteApplicationInputProcessingConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeleteApplicationInputProcessingConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteApplicationInputProcessingConfigurationCommand(input) {
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
    DeleteApplicationInputProcessingConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsClient";
        var commandName = "DeleteApplicationInputProcessingConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteApplicationInputProcessingConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteApplicationInputProcessingConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteApplicationInputProcessingConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand(input, context);
    };
    DeleteApplicationInputProcessingConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand(output, context);
    };
    return DeleteApplicationInputProcessingConfigurationCommand;
}($Command));
export { DeleteApplicationInputProcessingConfigurationCommand };
//# sourceMappingURL=DeleteApplicationInputProcessingConfigurationCommand.js.map