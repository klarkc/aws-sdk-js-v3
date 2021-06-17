import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DeleteGatewayRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteGatewayCommandInput extends DeleteGatewayRequest {
}
export interface DeleteGatewayCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a gateway from AWS IoT SiteWise. When you delete a gateway, some of the gateway's files remain
 *       in your gateway's file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DeleteGatewayCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DeleteGatewayCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DeleteGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteGatewayCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteGatewayCommand extends $Command<DeleteGatewayCommandInput, DeleteGatewayCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: DeleteGatewayCommandInput;
    constructor(input: DeleteGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteGatewayCommandInput, DeleteGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
