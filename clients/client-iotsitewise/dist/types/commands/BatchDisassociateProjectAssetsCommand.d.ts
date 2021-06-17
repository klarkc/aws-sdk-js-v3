import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { BatchDisassociateProjectAssetsRequest, BatchDisassociateProjectAssetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchDisassociateProjectAssetsCommandInput extends BatchDisassociateProjectAssetsRequest {
}
export interface BatchDisassociateProjectAssetsCommandOutput extends BatchDisassociateProjectAssetsResponse, __MetadataBearer {
}
/**
 * <p>Disassociates a group (batch) of assets from an AWS IoT SiteWise Monitor project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, BatchDisassociateProjectAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, BatchDisassociateProjectAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new BatchDisassociateProjectAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDisassociateProjectAssetsCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateProjectAssetsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchDisassociateProjectAssetsCommand extends $Command<BatchDisassociateProjectAssetsCommandInput, BatchDisassociateProjectAssetsCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: BatchDisassociateProjectAssetsCommandInput;
    constructor(input: BatchDisassociateProjectAssetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDisassociateProjectAssetsCommandInput, BatchDisassociateProjectAssetsCommandOutput>;
    private serialize;
    private deserialize;
}
