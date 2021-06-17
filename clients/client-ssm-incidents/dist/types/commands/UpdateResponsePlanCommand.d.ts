import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { UpdateResponsePlanInput, UpdateResponsePlanOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateResponsePlanCommandInput extends UpdateResponsePlanInput {
}
export interface UpdateResponsePlanCommandOutput extends UpdateResponsePlanOutput, __MetadataBearer {
}
/**
 * <p>Updates the specified response plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, UpdateResponsePlanCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, UpdateResponsePlanCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new UpdateResponsePlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResponsePlanCommandInput} for command's `input` shape.
 * @see {@link UpdateResponsePlanCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateResponsePlanCommand extends $Command<UpdateResponsePlanCommandInput, UpdateResponsePlanCommandOutput, SSMIncidentsClientResolvedConfig> {
    readonly input: UpdateResponsePlanCommandInput;
    constructor(input: UpdateResponsePlanCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMIncidentsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateResponsePlanCommandInput, UpdateResponsePlanCommandOutput>;
    private serialize;
    private deserialize;
}
