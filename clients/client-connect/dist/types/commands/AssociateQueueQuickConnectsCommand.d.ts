import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { AssociateQueueQuickConnectsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateQueueQuickConnectsCommandInput extends AssociateQueueQuickConnectsRequest {
}
export interface AssociateQueueQuickConnectsCommandOutput extends __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Associates a set of quick connects with a queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateQueueQuickConnectsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateQueueQuickConnectsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new AssociateQueueQuickConnectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateQueueQuickConnectsCommandInput} for command's `input` shape.
 * @see {@link AssociateQueueQuickConnectsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateQueueQuickConnectsCommand extends $Command<AssociateQueueQuickConnectsCommandInput, AssociateQueueQuickConnectsCommandOutput, ConnectClientResolvedConfig> {
    readonly input: AssociateQueueQuickConnectsCommandInput;
    constructor(input: AssociateQueueQuickConnectsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateQueueQuickConnectsCommandInput, AssociateQueueQuickConnectsCommandOutput>;
    private serialize;
    private deserialize;
}
