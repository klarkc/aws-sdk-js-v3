"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartTaskExecutionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Starts a specific invocation of a task. A <code>TaskExecution</code> value represents
 *       an individual run of a task. Each task can have at most one <code>TaskExecution</code> at a
 *       time.</p>
 *          <p>
 *             <code>TaskExecution</code> has the following transition phases: INITIALIZING |
 *       PREPARING | TRANSFERRING | VERIFYING | SUCCESS/FAILURE. </p>
 *
 *          <p>For detailed information, see the Task Execution section in the Components and
 *       Terminology topic in the <i>AWS DataSync User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, StartTaskExecutionCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, StartTaskExecutionCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new StartTaskExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartTaskExecutionCommandInput} for command's `input` shape.
 * @see {@link StartTaskExecutionCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StartTaskExecutionCommand extends smithy_client_1.Command {
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
        const clientName = "DataSyncClient";
        const commandName = "StartTaskExecutionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.StartTaskExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.StartTaskExecutionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1StartTaskExecutionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1StartTaskExecutionCommand(output, context);
    }
}
exports.StartTaskExecutionCommand = StartTaskExecutionCommand;
//# sourceMappingURL=StartTaskExecutionCommand.js.map