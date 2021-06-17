import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { PutRegistryCatalogDataRequest, PutRegistryCatalogDataResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutRegistryCatalogDataCommandInput extends PutRegistryCatalogDataRequest {
}
export interface PutRegistryCatalogDataCommandOutput extends PutRegistryCatalogDataResponse, __MetadataBearer {
}
/**
 * <p>Create or updates the catalog data for a public registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, PutRegistryCatalogDataCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, PutRegistryCatalogDataCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new PutRegistryCatalogDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRegistryCatalogDataCommandInput} for command's `input` shape.
 * @see {@link PutRegistryCatalogDataCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutRegistryCatalogDataCommand extends $Command<PutRegistryCatalogDataCommandInput, PutRegistryCatalogDataCommandOutput, ECRPUBLICClientResolvedConfig> {
    readonly input: PutRegistryCatalogDataCommandInput;
    constructor(input: PutRegistryCatalogDataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRPUBLICClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRegistryCatalogDataCommandInput, PutRegistryCatalogDataCommandOutput>;
    private serialize;
    private deserialize;
}
