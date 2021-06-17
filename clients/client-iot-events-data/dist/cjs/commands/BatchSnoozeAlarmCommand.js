"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchSnoozeAlarmCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Changes one or more alarms to the snooze mode. The alarms change to the
 *         <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchSnoozeAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchSnoozeAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new BatchSnoozeAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchSnoozeAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchSnoozeAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
class BatchSnoozeAlarmCommand extends smithy_client_1.Command {
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
        const clientName = "IoTEventsDataClient";
        const commandName = "BatchSnoozeAlarmCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.BatchSnoozeAlarmRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.BatchSnoozeAlarmResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1BatchSnoozeAlarmCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1BatchSnoozeAlarmCommand(output, context);
    }
}
exports.BatchSnoozeAlarmCommand = BatchSnoozeAlarmCommand;
//# sourceMappingURL=BatchSnoozeAlarmCommand.js.map