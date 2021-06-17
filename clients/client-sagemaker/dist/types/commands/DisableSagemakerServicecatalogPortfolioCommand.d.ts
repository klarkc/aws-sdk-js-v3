import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DisableSagemakerServicecatalogPortfolioInput, DisableSagemakerServicecatalogPortfolioOutput } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableSagemakerServicecatalogPortfolioCommandInput extends DisableSagemakerServicecatalogPortfolioInput {
}
export interface DisableSagemakerServicecatalogPortfolioCommandOutput extends DisableSagemakerServicecatalogPortfolioOutput, __MetadataBearer {
}
/**
 * <p>Disables using Service Catalog in SageMaker. Service Catalog is used to create
 *             SageMaker projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DisableSagemakerServicecatalogPortfolioCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DisableSagemakerServicecatalogPortfolioCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DisableSagemakerServicecatalogPortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableSagemakerServicecatalogPortfolioCommandInput} for command's `input` shape.
 * @see {@link DisableSagemakerServicecatalogPortfolioCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableSagemakerServicecatalogPortfolioCommand extends $Command<DisableSagemakerServicecatalogPortfolioCommandInput, DisableSagemakerServicecatalogPortfolioCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DisableSagemakerServicecatalogPortfolioCommandInput;
    constructor(input: DisableSagemakerServicecatalogPortfolioCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableSagemakerServicecatalogPortfolioCommandInput, DisableSagemakerServicecatalogPortfolioCommandOutput>;
    private serialize;
    private deserialize;
}
