import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { CreateGraphRequest, CreateGraphResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateGraphCommandInput extends CreateGraphRequest {
}
export interface CreateGraphCommandOutput extends CreateGraphResponse, __MetadataBearer {
}
/**
 * <p>Creates a new behavior graph for the calling account, and sets that account as the
 *          administrator account. This operation is called by the account that is enabling
 *          Detective.</p>
 *          <p>Before you try to enable Detective, make sure that your account has been enrolled in
 *          Amazon GuardDuty for at least 48 hours. If you do not meet this requirement, you cannot enable
 *          Detective. If you do meet the GuardDuty prerequisite, then when you make the request to enable
 *          Detective, it checks whether your data volume is within the Detective quota. If it exceeds the
 *          quota, then you cannot enable Detective. </p>
 *          <p>The operation also enables Detective for the calling account in the currently selected
 *          Region. It returns the ARN of the new behavior graph.</p>
 *          <p>
 *             <code>CreateGraph</code> triggers a process to create the corresponding data tables for
 *          the new behavior graph.</p>
 *          <p>An account can only be the administrator account for one behavior graph within a Region.
 *          If the same account calls <code>CreateGraph</code> with the same administrator account, it
 *          always returns the same behavior graph ARN. It does not create a new behavior graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, CreateGraphCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, CreateGraphCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new CreateGraphCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGraphCommandInput} for command's `input` shape.
 * @see {@link CreateGraphCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateGraphCommand extends $Command<CreateGraphCommandInput, CreateGraphCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: CreateGraphCommandInput;
    constructor(input: CreateGraphCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGraphCommandInput, CreateGraphCommandOutput>;
    private serialize;
    private deserialize;
}
