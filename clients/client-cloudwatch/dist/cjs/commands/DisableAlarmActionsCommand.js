"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisableAlarmActionsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Disables the actions for the specified alarms. When an alarm's actions are disabled, the
 * 			alarm actions do not execute when the alarm state changes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DisableAlarmActionsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DisableAlarmActionsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DisableAlarmActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableAlarmActionsCommandInput} for command's `input` shape.
 * @see {@link DisableAlarmActionsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DisableAlarmActionsCommand extends smithy_client_1.Command {
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
        const clientName = "CloudWatchClient";
        const commandName = "DisableAlarmActionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DisableAlarmActionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDisableAlarmActionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDisableAlarmActionsCommand(output, context);
    }
}
exports.DisableAlarmActionsCommand = DisableAlarmActionsCommand;
//# sourceMappingURL=DisableAlarmActionsCommand.js.map