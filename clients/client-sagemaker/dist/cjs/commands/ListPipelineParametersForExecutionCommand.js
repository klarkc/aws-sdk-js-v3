"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPipelineParametersForExecutionCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets a list of parameters for a pipeline execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListPipelineParametersForExecutionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListPipelineParametersForExecutionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListPipelineParametersForExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPipelineParametersForExecutionCommandInput} for command's `input` shape.
 * @see {@link ListPipelineParametersForExecutionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListPipelineParametersForExecutionCommand extends smithy_client_1.Command {
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
        const clientName = "SageMakerClient";
        const commandName = "ListPipelineParametersForExecutionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.ListPipelineParametersForExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.ListPipelineParametersForExecutionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListPipelineParametersForExecutionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListPipelineParametersForExecutionCommand(output, context);
    }
}
exports.ListPipelineParametersForExecutionCommand = ListPipelineParametersForExecutionCommand;
//# sourceMappingURL=ListPipelineParametersForExecutionCommand.js.map