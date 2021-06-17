import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { UpdateAssetModelRequest, UpdateAssetModelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateAssetModelCommandInput extends UpdateAssetModelRequest {
}
export interface UpdateAssetModelCommandOutput extends UpdateAssetModelResponse, __MetadataBearer {
}
/**
 * <p>Updates an asset model and all of the assets that were created from the model. Each asset
 *       created from the model inherits the updated asset model's property and hierarchy definitions.
 *       For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the
 *         <i>AWS IoT SiteWise User Guide</i>.</p>
 *          <important>
 *             <p>This operation overwrites the existing model with the provided model. To avoid deleting
 *         your asset model's properties or hierarchies, you must include their IDs and definitions in
 *         the updated asset model payload. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a>.</p>
 *             <p>If you remove a property from an asset model, AWS IoT SiteWise deletes all previous data for that
 *         property. If you remove a hierarchy definition from an asset model, AWS IoT SiteWise disassociates every
 *         asset associated with that hierarchy. You can't change the type or data type of an existing
 *         property.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdateAssetModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdateAssetModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new UpdateAssetModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssetModelCommandInput} for command's `input` shape.
 * @see {@link UpdateAssetModelCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAssetModelCommand extends $Command<UpdateAssetModelCommandInput, UpdateAssetModelCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: UpdateAssetModelCommandInput;
    constructor(input: UpdateAssetModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAssetModelCommandInput, UpdateAssetModelCommandOutput>;
    private serialize;
    private deserialize;
}
