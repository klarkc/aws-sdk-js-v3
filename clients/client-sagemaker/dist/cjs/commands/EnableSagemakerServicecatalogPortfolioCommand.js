"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnableSagemakerServicecatalogPortfolioCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Enables using Service Catalog in SageMaker. Service Catalog is used to create
 *             SageMaker projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, EnableSagemakerServicecatalogPortfolioCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, EnableSagemakerServicecatalogPortfolioCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new EnableSagemakerServicecatalogPortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableSagemakerServicecatalogPortfolioCommandInput} for command's `input` shape.
 * @see {@link EnableSagemakerServicecatalogPortfolioCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class EnableSagemakerServicecatalogPortfolioCommand extends smithy_client_1.Command {
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
        const commandName = "EnableSagemakerServicecatalogPortfolioCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.EnableSagemakerServicecatalogPortfolioInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.EnableSagemakerServicecatalogPortfolioOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1EnableSagemakerServicecatalogPortfolioCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1EnableSagemakerServicecatalogPortfolioCommand(output, context);
    }
}
exports.EnableSagemakerServicecatalogPortfolioCommand = EnableSagemakerServicecatalogPortfolioCommand;
//# sourceMappingURL=EnableSagemakerServicecatalogPortfolioCommand.js.map