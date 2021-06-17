"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelTaskExecutionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Cancels execution of a task. </p>
 *          <p>When you cancel a task execution, the transfer of some files is abruptly interrupted.
 *       The contents of files that are transferred to the destination might be incomplete or
 *       inconsistent with the source files. However, if you start a new task execution on the same
 *       task and you allow the task execution to complete, file content on the destination is complete
 *       and consistent. This applies to other unexpected failures that interrupt a task execution. In
 *       all of these cases, AWS DataSync successfully complete the transfer when you start the next
 *       task execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CancelTaskExecutionCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CancelTaskExecutionCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CancelTaskExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelTaskExecutionCommandInput} for command's `input` shape.
 * @see {@link CancelTaskExecutionCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CancelTaskExecutionCommand extends smithy_client_1.Command {
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
        const commandName = "CancelTaskExecutionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CancelTaskExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CancelTaskExecutionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CancelTaskExecutionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CancelTaskExecutionCommand(output, context);
    }
}
exports.CancelTaskExecutionCommand = CancelTaskExecutionCommand;
//# sourceMappingURL=CancelTaskExecutionCommand.js.map