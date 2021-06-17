import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { DisassociateLensesInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateLensesCommandInput extends DisassociateLensesInput {
}
export interface DisassociateLensesCommandOutput extends __MetadataBearer {
}
/**
 * <p>Disassociate a lens from a workload.</p>
 *         <note>
 *             <p>The AWS Well-Architected Framework lens (<code>wellarchitected</code>) cannot be
 *                 removed from a workload.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, DisassociateLensesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DisassociateLensesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new DisassociateLensesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateLensesCommandInput} for command's `input` shape.
 * @see {@link DisassociateLensesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateLensesCommand extends $Command<DisassociateLensesCommandInput, DisassociateLensesCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: DisassociateLensesCommandInput;
    constructor(input: DisassociateLensesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateLensesCommandInput, DisassociateLensesCommandOutput>;
    private serialize;
    private deserialize;
}
