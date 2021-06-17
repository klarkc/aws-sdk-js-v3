import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { GetMilestoneInput, GetMilestoneOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMilestoneCommandInput extends GetMilestoneInput {
}
export interface GetMilestoneCommandOutput extends GetMilestoneOutput, __MetadataBearer {
}
/**
 * <p>Get a milestone for an existing workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetMilestoneCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetMilestoneCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new GetMilestoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMilestoneCommandInput} for command's `input` shape.
 * @see {@link GetMilestoneCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMilestoneCommand extends $Command<GetMilestoneCommandInput, GetMilestoneCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: GetMilestoneCommandInput;
    constructor(input: GetMilestoneCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMilestoneCommandInput, GetMilestoneCommandOutput>;
    private serialize;
    private deserialize;
}
