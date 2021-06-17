import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { AssociateLensesInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateLensesCommandInput extends AssociateLensesInput {
}
export interface AssociateLensesCommandOutput extends __MetadataBearer {
}
/**
 * <p>Associate a lens to a workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, AssociateLensesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, AssociateLensesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new AssociateLensesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateLensesCommandInput} for command's `input` shape.
 * @see {@link AssociateLensesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateLensesCommand extends $Command<AssociateLensesCommandInput, AssociateLensesCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: AssociateLensesCommandInput;
    constructor(input: AssociateLensesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateLensesCommandInput, AssociateLensesCommandOutput>;
    private serialize;
    private deserialize;
}
