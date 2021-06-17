import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { DeleteResponsePlanInput, DeleteResponsePlanOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteResponsePlanCommandInput extends DeleteResponsePlanInput {
}
export interface DeleteResponsePlanCommandOutput extends DeleteResponsePlanOutput, __MetadataBearer {
}
/**
 * <p>Deletes the specified response plan. Deleting a response plan stops all linked
 *             CloudWatch alarms and EventBridge events from creating an incident with this response
 *             plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, DeleteResponsePlanCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, DeleteResponsePlanCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new DeleteResponsePlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResponsePlanCommandInput} for command's `input` shape.
 * @see {@link DeleteResponsePlanCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteResponsePlanCommand extends $Command<DeleteResponsePlanCommandInput, DeleteResponsePlanCommandOutput, SSMIncidentsClientResolvedConfig> {
    readonly input: DeleteResponsePlanCommandInput;
    constructor(input: DeleteResponsePlanCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMIncidentsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResponsePlanCommandInput, DeleteResponsePlanCommandOutput>;
    private serialize;
    private deserialize;
}
