import { MarketplaceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MarketplaceCatalogClient";
import { CancelChangeSetRequest, CancelChangeSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelChangeSetCommandInput extends CancelChangeSetRequest {
}
export interface CancelChangeSetCommandOutput extends CancelChangeSetResponse, __MetadataBearer {
}
/**
 * <p>Used to cancel an open change request. Must be sent before the status of the request
 *             changes to <code>APPLYING</code>, the final stage of completing your change request. You
 *             can describe a change during the 60-day request history retention period for API
 *             calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, CancelChangeSetCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, CancelChangeSetCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * const client = new MarketplaceCatalogClient(config);
 * const command = new CancelChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelChangeSetCommandInput} for command's `input` shape.
 * @see {@link CancelChangeSetCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelChangeSetCommand extends $Command<CancelChangeSetCommandInput, CancelChangeSetCommandOutput, MarketplaceCatalogClientResolvedConfig> {
    readonly input: CancelChangeSetCommandInput;
    constructor(input: CancelChangeSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MarketplaceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelChangeSetCommandInput, CancelChangeSetCommandOutput>;
    private serialize;
    private deserialize;
}
