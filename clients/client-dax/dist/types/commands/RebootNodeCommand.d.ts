import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { RebootNodeRequest, RebootNodeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RebootNodeCommandInput extends RebootNodeRequest {
}
export interface RebootNodeCommandOutput extends RebootNodeResponse, __MetadataBearer {
}
/**
 * <p>Reboots a single node of a DAX cluster. The reboot action takes place
 *             as soon as possible. During the
 *             reboot, the node status is set to REBOOTING.</p>
 *         <note>
 *             <p>
 *                <code>RebootNode</code> restarts the DAX engine process and does not remove the contents of the cache.  </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, RebootNodeCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, RebootNodeCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new RebootNodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootNodeCommandInput} for command's `input` shape.
 * @see {@link RebootNodeCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RebootNodeCommand extends $Command<RebootNodeCommandInput, RebootNodeCommandOutput, DAXClientResolvedConfig> {
    readonly input: RebootNodeCommandInput;
    constructor(input: RebootNodeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebootNodeCommandInput, RebootNodeCommandOutput>;
    private serialize;
    private deserialize;
}
