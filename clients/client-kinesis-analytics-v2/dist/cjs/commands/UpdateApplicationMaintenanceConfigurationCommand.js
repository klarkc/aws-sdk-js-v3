"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateApplicationMaintenanceConfigurationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class UpdateApplicationMaintenanceConfigurationCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisAnalyticsV2Client";
        const commandName = "UpdateApplicationMaintenanceConfigurationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateApplicationMaintenanceConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateApplicationMaintenanceConfigurationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand(output, context);
    }
}
exports.UpdateApplicationMaintenanceConfigurationCommand = UpdateApplicationMaintenanceConfigurationCommand;
//# sourceMappingURL=UpdateApplicationMaintenanceConfigurationCommand.js.map