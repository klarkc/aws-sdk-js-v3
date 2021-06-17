"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePipelineStatusCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline
 *             stops or restarts the processing of jobs.</p>
 *         <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't
 *             cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which
 *             you submitted the jobs, you have more time to get the job IDs for the jobs that you want
 *             to cancel, and to send a <a>CancelJob</a> request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, UpdatePipelineStatusCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, UpdatePipelineStatusCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new UpdatePipelineStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePipelineStatusCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineStatusCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdatePipelineStatusCommand extends smithy_client_1.Command {
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
        const clientName = "ElasticTranscoderClient";
        const commandName = "UpdatePipelineStatusCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdatePipelineStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdatePipelineStatusResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1UpdatePipelineStatusCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1UpdatePipelineStatusCommand(output, context);
    }
}
exports.UpdatePipelineStatusCommand = UpdatePipelineStatusCommand;
//# sourceMappingURL=UpdatePipelineStatusCommand.js.map