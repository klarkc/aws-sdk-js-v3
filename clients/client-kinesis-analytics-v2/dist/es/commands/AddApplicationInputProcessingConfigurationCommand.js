import { __extends } from "tslib";
import { AddApplicationInputProcessingConfigurationRequest, AddApplicationInputProcessingConfigurationResponse, } from "../models/models_0";
import { deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommand, serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds an <a>InputProcessingConfiguration</a> to a SQL-based Kinesis Data Analytics application. An input processor pre-processes records
 *       on the input stream before the
 *       application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, AddApplicationInputProcessingConfigurationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, AddApplicationInputProcessingConfigurationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new AddApplicationInputProcessingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddApplicationInputProcessingConfigurationCommandInput} for command's `input` shape.
 * @see {@link AddApplicationInputProcessingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddApplicationInputProcessingConfigurationCommand = /** @class */ (function (_super) {
    __extends(AddApplicationInputProcessingConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddApplicationInputProcessingConfigurationCommand(input) {
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
    AddApplicationInputProcessingConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsV2Client";
        var commandName = "AddApplicationInputProcessingConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddApplicationInputProcessingConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddApplicationInputProcessingConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddApplicationInputProcessingConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand(input, context);
    };
    AddApplicationInputProcessingConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommand(output, context);
    };
    return AddApplicationInputProcessingConfigurationCommand;
}($Command));
export { AddApplicationInputProcessingConfigurationCommand };
//# sourceMappingURL=AddApplicationInputProcessingConfigurationCommand.js.map