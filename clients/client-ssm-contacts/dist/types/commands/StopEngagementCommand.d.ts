import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { StopEngagementRequest, StopEngagementResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopEngagementCommandInput extends StopEngagementRequest {
}
export interface StopEngagementCommandOutput extends StopEngagementResult, __MetadataBearer {
}
/**
 * <p>Stops an engagement before it finishes the final stage of the escalation plan or
 *          engagement plan. Further contacts aren't engaged.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, StopEngagementCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, StopEngagementCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new StopEngagementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopEngagementCommandInput} for command's `input` shape.
 * @see {@link StopEngagementCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopEngagementCommand extends $Command<StopEngagementCommandInput, StopEngagementCommandOutput, SSMContactsClientResolvedConfig> {
    readonly input: StopEngagementCommandInput;
    constructor(input: StopEngagementCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMContactsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopEngagementCommandInput, StopEngagementCommandOutput>;
    private serialize;
    private deserialize;
}
