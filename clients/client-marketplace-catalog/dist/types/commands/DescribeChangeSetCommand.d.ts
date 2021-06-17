import { MarketplaceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MarketplaceCatalogClient";
import { DescribeChangeSetRequest, DescribeChangeSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeChangeSetCommandInput extends DescribeChangeSetRequest {
}
export interface DescribeChangeSetCommandOutput extends DescribeChangeSetResponse, __MetadataBearer {
}
/**
 * <p>Provides information about a given change set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, DescribeChangeSetCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, DescribeChangeSetCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * const client = new MarketplaceCatalogClient(config);
 * const command = new DescribeChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeChangeSetCommandInput} for command's `input` shape.
 * @see {@link DescribeChangeSetCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeChangeSetCommand extends $Command<DescribeChangeSetCommandInput, DescribeChangeSetCommandOutput, MarketplaceCatalogClientResolvedConfig> {
    readonly input: DescribeChangeSetCommandInput;
    constructor(input: DescribeChangeSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MarketplaceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeChangeSetCommandInput, DescribeChangeSetCommandOutput>;
    private serialize;
    private deserialize;
}
