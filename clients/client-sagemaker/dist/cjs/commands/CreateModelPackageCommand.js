"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateModelPackageCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a model package that you can use to create Amazon SageMaker models or list on AWS
 *             Marketplace, or a versioned model that is part of a model group. Buyers can subscribe to
 *             model packages listed on AWS Marketplace to create models in Amazon SageMaker.</p>
 *         <p>To create a model package by specifying a Docker container that contains your
 *             inference code and the Amazon S3 location of your model artifacts, provide values for
 *                 <code>InferenceSpecification</code>. To create a model from an algorithm resource
 *             that you created or subscribed to in AWS Marketplace, provide a value for
 *                 <code>SourceAlgorithmSpecification</code>.</p>
 *         <note>
 *             <p>There are two types of model packages:</p>
 *             <ul>
 *                <li>
 *                     <p>Versioned - a model that is part of a model group in the model
 *                         registry.</p>
 *                 </li>
 *                <li>
 *                     <p>Unversioned - a model package that is not part of a model group.</p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateModelPackageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateModelPackageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateModelPackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateModelPackageCommandInput} for command's `input` shape.
 * @see {@link CreateModelPackageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateModelPackageCommand extends smithy_client_1.Command {
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
        const commandName = "CreateModelPackageCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.CreateModelPackageInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.CreateModelPackageOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateModelPackageCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateModelPackageCommand(output, context);
    }
}
exports.CreateModelPackageCommand = CreateModelPackageCommand;
//# sourceMappingURL=CreateModelPackageCommand.js.map