"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateModelExplainabilityJobDefinitionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates the definition for a model explainability job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateModelExplainabilityJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateModelExplainabilityJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateModelExplainabilityJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateModelExplainabilityJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateModelExplainabilityJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateModelExplainabilityJobDefinitionCommand extends smithy_client_1.Command {
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
        const commandName = "CreateModelExplainabilityJobDefinitionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateModelExplainabilityJobDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateModelExplainabilityJobDefinitionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateModelExplainabilityJobDefinitionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateModelExplainabilityJobDefinitionCommand(output, context);
    }
}
exports.CreateModelExplainabilityJobDefinitionCommand = CreateModelExplainabilityJobDefinitionCommand;
//# sourceMappingURL=CreateModelExplainabilityJobDefinitionCommand.js.map