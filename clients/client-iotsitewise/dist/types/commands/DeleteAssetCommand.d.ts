import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DeleteAssetRequest, DeleteAssetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAssetCommandInput extends DeleteAssetRequest {
}
export interface DeleteAssetCommandOutput extends DeleteAssetResponse, __MetadataBearer {
}
/**
 * <p>Deletes an asset. This action can't be undone. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and
 *         models</a> in the <i>AWS IoT SiteWise User Guide</i>.
 *       </p>
 *          <note>
 *             <p>You can't delete an asset that's associated to another asset. For more information, see
 *           <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html">DisassociateAssets</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DeleteAssetCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DeleteAssetCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DeleteAssetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssetCommandInput} for command's `input` shape.
 * @see {@link DeleteAssetCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAssetCommand extends $Command<DeleteAssetCommandInput, DeleteAssetCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: DeleteAssetCommandInput;
    constructor(input: DeleteAssetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAssetCommandInput, DeleteAssetCommandOutput>;
    private serialize;
    private deserialize;
}
