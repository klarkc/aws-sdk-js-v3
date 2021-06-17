"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartMonitoringMemberCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Sends a request to enable data ingest for a member account that has a status of
 *             <code>ACCEPTED_BUT_DISABLED</code>.</p>
 *          <p>For valid member accounts, the status is updated as follows.</p>
 *          <ul>
 *             <li>
 *                <p>If Detective enabled the member account, then the new status is
 *                <code>ENABLED</code>.</p>
 *             </li>
 *             <li>
 *                <p>If Detective cannot enable the member account, the status remains
 *                   <code>ACCEPTED_BUT_DISABLED</code>. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, StartMonitoringMemberCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, StartMonitoringMemberCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new StartMonitoringMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMonitoringMemberCommandInput} for command's `input` shape.
 * @see {@link StartMonitoringMemberCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StartMonitoringMemberCommand extends smithy_client_1.Command {
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
        const clientName = "DetectiveClient";
        const commandName = "StartMonitoringMemberCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.StartMonitoringMemberRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1StartMonitoringMemberCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1StartMonitoringMemberCommand(output, context);
    }
}
exports.StartMonitoringMemberCommand = StartMonitoringMemberCommand;
//# sourceMappingURL=StartMonitoringMemberCommand.js.map