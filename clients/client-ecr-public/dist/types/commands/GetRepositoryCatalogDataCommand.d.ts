import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { GetRepositoryCatalogDataRequest, GetRepositoryCatalogDataResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRepositoryCatalogDataCommandInput extends GetRepositoryCatalogDataRequest {
}
export interface GetRepositoryCatalogDataCommandOutput extends GetRepositoryCatalogDataResponse, __MetadataBearer {
}
/**
 * <p>Retrieve catalog metadata for a repository in a public registry. This metadata is
 *          displayed publicly in the Amazon ECR Public Gallery.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, GetRepositoryCatalogDataCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, GetRepositoryCatalogDataCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new GetRepositoryCatalogDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRepositoryCatalogDataCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryCatalogDataCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRepositoryCatalogDataCommand extends $Command<GetRepositoryCatalogDataCommandInput, GetRepositoryCatalogDataCommandOutput, ECRPUBLICClientResolvedConfig> {
    readonly input: GetRepositoryCatalogDataCommandInput;
    constructor(input: GetRepositoryCatalogDataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRPUBLICClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRepositoryCatalogDataCommandInput, GetRepositoryCatalogDataCommandOutput>;
    private serialize;
    private deserialize;
}
