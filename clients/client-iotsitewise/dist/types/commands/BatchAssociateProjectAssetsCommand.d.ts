import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { BatchAssociateProjectAssetsRequest, BatchAssociateProjectAssetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchAssociateProjectAssetsCommandInput extends BatchAssociateProjectAssetsRequest {
}
export interface BatchAssociateProjectAssetsCommandOutput extends BatchAssociateProjectAssetsResponse, __MetadataBearer {
}
/**
 * <p>Associates a group (batch) of assets with an AWS IoT SiteWise Monitor project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, BatchAssociateProjectAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, BatchAssociateProjectAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new BatchAssociateProjectAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAssociateProjectAssetsCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateProjectAssetsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchAssociateProjectAssetsCommand extends $Command<BatchAssociateProjectAssetsCommandInput, BatchAssociateProjectAssetsCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: BatchAssociateProjectAssetsCommandInput;
    constructor(input: BatchAssociateProjectAssetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchAssociateProjectAssetsCommandInput, BatchAssociateProjectAssetsCommandOutput>;
    private serialize;
    private deserialize;
}
