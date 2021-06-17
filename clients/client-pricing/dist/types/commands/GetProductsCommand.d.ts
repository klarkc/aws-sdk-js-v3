import { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient";
import { GetProductsRequest, GetProductsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetProductsCommandInput extends GetProductsRequest {
}
export interface GetProductsCommandOutput extends GetProductsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of all products that match the filter criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingClient, GetProductsCommand } from "@aws-sdk/client-pricing"; // ES Modules import
 * // const { PricingClient, GetProductsCommand } = require("@aws-sdk/client-pricing"); // CommonJS import
 * const client = new PricingClient(config);
 * const command = new GetProductsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProductsCommandInput} for command's `input` shape.
 * @see {@link GetProductsCommandOutput} for command's `response` shape.
 * @see {@link PricingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetProductsCommand extends $Command<GetProductsCommandInput, GetProductsCommandOutput, PricingClientResolvedConfig> {
    readonly input: GetProductsCommandInput;
    constructor(input: GetProductsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PricingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetProductsCommandInput, GetProductsCommandOutput>;
    private serialize;
    private deserialize;
}
