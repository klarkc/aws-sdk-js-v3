"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEndpointWeightsAndCapacitiesCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates variant weight of one or more variants associated with an existing
 *             endpoint, or capacity of one variant associated with an existing endpoint. When it
 *             receives the request, Amazon SageMaker sets the endpoint status to <code>Updating</code>. After
 *             updating the endpoint, it sets the status to <code>InService</code>. To check the status
 *             of an endpoint, use the <a>DescribeEndpoint</a> API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateEndpointWeightsAndCapacitiesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateEndpointWeightsAndCapacitiesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateEndpointWeightsAndCapacitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEndpointWeightsAndCapacitiesCommandInput} for command's `input` shape.
 * @see {@link UpdateEndpointWeightsAndCapacitiesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateEndpointWeightsAndCapacitiesCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateEndpointWeightsAndCapacitiesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.UpdateEndpointWeightsAndCapacitiesInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.UpdateEndpointWeightsAndCapacitiesOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommand(output, context);
    }
}
exports.UpdateEndpointWeightsAndCapacitiesCommand = UpdateEndpointWeightsAndCapacitiesCommand;
//# sourceMappingURL=UpdateEndpointWeightsAndCapacitiesCommand.js.map