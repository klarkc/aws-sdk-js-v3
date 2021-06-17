"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEndpointCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deploys the new <code>EndpointConfig</code> specified in the request, switches to
 *             using newly created endpoint, and then deletes resources provisioned for the endpoint
 *             using the previous <code>EndpointConfig</code> (there is no availability loss). </p>
 *         <p>When Amazon SageMaker receives the request, it sets the endpoint status to
 *                 <code>Updating</code>. After updating the endpoint, it sets the status to
 *                 <code>InService</code>. To check the status of an endpoint, use the <a>DescribeEndpoint</a> API.
 *
 *         </p>
 *         <note>
 *             <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is
 *                 live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code>
 *                 operations are being performed on the endpoint. To update an endpoint, you must
 *                 create a new <code>EndpointConfig</code>.</p>
 *             <p>If you delete the <code>EndpointConfig</code> of an endpoint that is active or
 *                 being created or updated you may lose visibility into the instance type the endpoint
 *                 is using. The endpoint must be deleted in order to stop incurring charges.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateEndpointCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateEndpointCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateEndpointCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateEndpointCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateEndpointCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.UpdateEndpointInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.UpdateEndpointOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateEndpointCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateEndpointCommand(output, context);
    }
}
exports.UpdateEndpointCommand = UpdateEndpointCommand;
//# sourceMappingURL=UpdateEndpointCommand.js.map