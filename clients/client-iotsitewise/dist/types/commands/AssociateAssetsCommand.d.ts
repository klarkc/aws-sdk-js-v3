import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { AssociateAssetsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateAssetsCommandInput extends AssociateAssetsRequest {
}
export interface AssociateAssetsCommandOutput extends __MetadataBearer {
}
/**
 * <p>Associates a child asset with the given parent asset through a hierarchy defined in the
 *       parent asset's model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/add-associated-assets.html">Associating assets</a> in the
 *         <i>AWS IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, AssociateAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, AssociateAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new AssociateAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateAssetsCommandInput} for command's `input` shape.
 * @see {@link AssociateAssetsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateAssetsCommand extends $Command<AssociateAssetsCommandInput, AssociateAssetsCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: AssociateAssetsCommandInput;
    constructor(input: AssociateAssetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateAssetsCommandInput, AssociateAssetsCommandOutput>;
    private serialize;
    private deserialize;
}
