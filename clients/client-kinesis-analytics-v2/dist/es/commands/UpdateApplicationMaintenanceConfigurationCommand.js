import { __extends } from "tslib";
import { UpdateApplicationMaintenanceConfigurationRequest, UpdateApplicationMaintenanceConfigurationResponse, } from "../models/models_0";
import { deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand, serializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the maintenance configuration of the Kinesis Data Analytics application. </p>
 *          <p>You can invoke this operation on an application that is in one of the two following
 *       states: <code>READY</code> or <code>RUNNING</code>. If you invoke it when the application is
 *       in a state other than these two states, it throws a <code>ResourceInUseException</code>. The
 *       service makes use of the updated configuration the next time it schedules maintenance for the
 *       application. If you invoke this operation after the service schedules maintenance, the service
 *       will apply the configuration update the next time it schedules maintenance for the
 *       application. This means that you might not see the maintenance configuration update applied to
 *       the maintenance process that follows a successful invocation of this operation, but to the
 *       following maintenance process instead.</p>
 *          <p>To see the current maintenance configuration of your application, invoke the
 *       <a>DescribeApplication</a> operation.</p>
 *          <p>For information about application maintenance, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/maintenance.html">Kinesis Data Analytics for Apache Flink Maintenance</a>.</p>
 *          <note>
 *             <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, UpdateApplicationMaintenanceConfigurationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, UpdateApplicationMaintenanceConfigurationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new UpdateApplicationMaintenanceConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApplicationMaintenanceConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationMaintenanceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateApplicationMaintenanceConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateApplicationMaintenanceConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateApplicationMaintenanceConfigurationCommand(input) {
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
    UpdateApplicationMaintenanceConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsV2Client";
        var commandName = "UpdateApplicationMaintenanceConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateApplicationMaintenanceConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateApplicationMaintenanceConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateApplicationMaintenanceConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand(input, context);
    };
    UpdateApplicationMaintenanceConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand(output, context);
    };
    return UpdateApplicationMaintenanceConfigurationCommand;
}($Command));
export { UpdateApplicationMaintenanceConfigurationCommand };
//# sourceMappingURL=UpdateApplicationMaintenanceConfigurationCommand.js.map