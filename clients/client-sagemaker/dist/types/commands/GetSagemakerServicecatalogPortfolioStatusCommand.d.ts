import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { GetSagemakerServicecatalogPortfolioStatusInput, GetSagemakerServicecatalogPortfolioStatusOutput } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSagemakerServicecatalogPortfolioStatusCommandInput extends GetSagemakerServicecatalogPortfolioStatusInput {
}
export interface GetSagemakerServicecatalogPortfolioStatusCommandOutput extends GetSagemakerServicecatalogPortfolioStatusOutput, __MetadataBearer {
}
/**
 * <p>Gets the status of Service Catalog in SageMaker. Service Catalog is used to create
 *             SageMaker projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, GetSagemakerServicecatalogPortfolioStatusCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, GetSagemakerServicecatalogPortfolioStatusCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new GetSagemakerServicecatalogPortfolioStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSagemakerServicecatalogPortfolioStatusCommandInput} for command's `input` shape.
 * @see {@link GetSagemakerServicecatalogPortfolioStatusCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSagemakerServicecatalogPortfolioStatusCommand extends $Command<GetSagemakerServicecatalogPortfolioStatusCommandInput, GetSagemakerServicecatalogPortfolioStatusCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: GetSagemakerServicecatalogPortfolioStatusCommandInput;
    constructor(input: GetSagemakerServicecatalogPortfolioStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSagemakerServicecatalogPortfolioStatusCommandInput, GetSagemakerServicecatalogPortfolioStatusCommandOutput>;
    private serialize;
    private deserialize;
}
