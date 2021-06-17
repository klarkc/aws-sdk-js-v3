import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { CreateWorkloadShareInput, CreateWorkloadShareOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateWorkloadShareCommandInput extends CreateWorkloadShareInput {
}
export interface CreateWorkloadShareCommandOutput extends CreateWorkloadShareOutput, __MetadataBearer {
}
/**
 * <p>Create a workload share.</p>
 *         <p>The owner of a workload can share it with other AWS accounts and IAM users in the same
 *             AWS Region. Shared access to a workload is not removed until the workload invitation is
 *             deleted.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a Workload</a> in the
 *                 <i>AWS Well-Architected Tool User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateWorkloadShareCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateWorkloadShareCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new CreateWorkloadShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkloadShareCommandInput} for command's `input` shape.
 * @see {@link CreateWorkloadShareCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateWorkloadShareCommand extends $Command<CreateWorkloadShareCommandInput, CreateWorkloadShareCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: CreateWorkloadShareCommandInput;
    constructor(input: CreateWorkloadShareCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWorkloadShareCommandInput, CreateWorkloadShareCommandOutput>;
    private serialize;
    private deserialize;
}
