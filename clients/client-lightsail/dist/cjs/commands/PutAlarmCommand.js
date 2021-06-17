"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutAlarmCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates or updates an alarm, and associates it with the specified metric.</p>
 *          <p>An alarm is used to monitor a single metric for one of your resources. When a metric
 *       condition is met, the alarm can notify you by email, SMS text message, and a banner displayed
 *       on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms
 *         in Amazon Lightsail</a>.</p>
 *          <p>When this action creates an alarm, the alarm state is immediately set to
 *         <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set
 *       appropriately. Any actions associated with the new state are then executed.</p>
 *          <p>When you update an existing alarm, its state is left unchanged, but the update completely
 *       overwrites the previous configuration of the alarm. The alarm is then evaluated with the
 *       updated configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, PutAlarmCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, PutAlarmCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new PutAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAlarmCommandInput} for command's `input` shape.
 * @see {@link PutAlarmCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutAlarmCommand extends smithy_client_1.Command {
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
        const clientName = "LightsailClient";
        const commandName = "PutAlarmCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.PutAlarmRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.PutAlarmResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutAlarmCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutAlarmCommand(output, context);
    }
}
exports.PutAlarmCommand = PutAlarmCommand;
//# sourceMappingURL=PutAlarmCommand.js.map