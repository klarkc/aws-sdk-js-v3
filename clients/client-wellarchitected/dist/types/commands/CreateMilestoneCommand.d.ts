import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { CreateMilestoneInput, CreateMilestoneOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateMilestoneCommandInput extends CreateMilestoneInput {
}
export interface CreateMilestoneCommandOutput extends CreateMilestoneOutput, __MetadataBearer {
}
/**
 * <p>Create a milestone for an existing workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateMilestoneCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateMilestoneCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new CreateMilestoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMilestoneCommandInput} for command's `input` shape.
 * @see {@link CreateMilestoneCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateMilestoneCommand extends $Command<CreateMilestoneCommandInput, CreateMilestoneCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: CreateMilestoneCommandInput;
    constructor(input: CreateMilestoneCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMilestoneCommandInput, CreateMilestoneCommandOutput>;
    private serialize;
    private deserialize;
}
