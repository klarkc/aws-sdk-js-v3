import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { GetRegistryCatalogDataRequest, GetRegistryCatalogDataResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRegistryCatalogDataCommandInput extends GetRegistryCatalogDataRequest {
}
export interface GetRegistryCatalogDataCommandOutput extends GetRegistryCatalogDataResponse, __MetadataBearer {
}
/**
 * <p>Retrieves catalog metadata for a public registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, GetRegistryCatalogDataCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, GetRegistryCatalogDataCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new GetRegistryCatalogDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRegistryCatalogDataCommandInput} for command's `input` shape.
 * @see {@link GetRegistryCatalogDataCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRegistryCatalogDataCommand extends $Command<GetRegistryCatalogDataCommandInput, GetRegistryCatalogDataCommandOutput, ECRPUBLICClientResolvedConfig> {
    readonly input: GetRegistryCatalogDataCommandInput;
    constructor(input: GetRegistryCatalogDataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRPUBLICClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRegistryCatalogDataCommandInput, GetRegistryCatalogDataCommandOutput>;
    private serialize;
    private deserialize;
}
