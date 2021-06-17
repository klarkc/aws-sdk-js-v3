import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { CancelClusterRequest, CancelClusterResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelClusterCommandInput extends CancelClusterRequest {
}
export interface CancelClusterCommandOutput extends CancelClusterResult, __MetadataBearer {
}
/**
 * <p>Cancels a cluster job. You can only cancel a cluster job while it's in the
 *         <code>AwaitingQuorum</code> status. You'll have at least an hour after creating a cluster
 *       job to cancel it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CancelClusterCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CancelClusterCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new CancelClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelClusterCommandInput} for command's `input` shape.
 * @see {@link CancelClusterCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelClusterCommand extends $Command<CancelClusterCommandInput, CancelClusterCommandOutput, SnowballClientResolvedConfig> {
    readonly input: CancelClusterCommandInput;
    constructor(input: CancelClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelClusterCommandInput, CancelClusterCommandOutput>;
    private serialize;
    private deserialize;
}
