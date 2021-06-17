import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { UpdateGatewayRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateGatewayCommandInput extends UpdateGatewayRequest {
}
export interface UpdateGatewayCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates a gateway's name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdateGatewayCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdateGatewayCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new UpdateGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGatewayCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateGatewayCommand extends $Command<UpdateGatewayCommandInput, UpdateGatewayCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: UpdateGatewayCommandInput;
    constructor(input: UpdateGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateGatewayCommandInput, UpdateGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
