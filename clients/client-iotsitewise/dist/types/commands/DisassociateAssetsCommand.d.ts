import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DisassociateAssetsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateAssetsCommandInput extends DisassociateAssetsRequest {
}
export interface DisassociateAssetsCommandOutput extends __MetadataBearer {
}
/**
 * <p>Disassociates a child asset from the given parent asset through a hierarchy defined in the
 *       parent asset's model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DisassociateAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DisassociateAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DisassociateAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateAssetsCommandInput} for command's `input` shape.
 * @see {@link DisassociateAssetsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateAssetsCommand extends $Command<DisassociateAssetsCommandInput, DisassociateAssetsCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: DisassociateAssetsCommandInput;
    constructor(input: DisassociateAssetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateAssetsCommandInput, DisassociateAssetsCommandOutput>;
    private serialize;
    private deserialize;
}
