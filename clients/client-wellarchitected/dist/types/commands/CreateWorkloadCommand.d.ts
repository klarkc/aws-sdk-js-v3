import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { CreateWorkloadInput, CreateWorkloadOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateWorkloadCommandInput extends CreateWorkloadInput {
}
export interface CreateWorkloadCommandOutput extends CreateWorkloadOutput, __MetadataBearer {
}
/**
 * <p>Create a new workload.</p>
 *         <p>The owner of a workload can share the workload with other AWS accounts and IAM users
 *             in the same AWS Region. Only the owner of a workload can delete it.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the
 *                 <i>AWS Well-Architected Tool User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateWorkloadCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateWorkloadCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new CreateWorkloadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkloadCommandInput} for command's `input` shape.
 * @see {@link CreateWorkloadCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateWorkloadCommand extends $Command<CreateWorkloadCommandInput, CreateWorkloadCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: CreateWorkloadCommandInput;
    constructor(input: CreateWorkloadCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWorkloadCommandInput, CreateWorkloadCommandOutput>;
    private serialize;
    private deserialize;
}
