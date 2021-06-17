import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DisableProactiveEngagementRequest, DisableProactiveEngagementResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableProactiveEngagementCommandInput extends DisableProactiveEngagementRequest {
}
export interface DisableProactiveEngagementCommandOutput extends DisableProactiveEngagementResponse, __MetadataBearer {
}
/**
 * <p>Removes authorization from the DDoS Response Team (DRT) to notify contacts about escalations to the DRT and to initiate proactive customer support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DisableProactiveEngagementCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DisableProactiveEngagementCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DisableProactiveEngagementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableProactiveEngagementCommandInput} for command's `input` shape.
 * @see {@link DisableProactiveEngagementCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableProactiveEngagementCommand extends $Command<DisableProactiveEngagementCommandInput, DisableProactiveEngagementCommandOutput, ShieldClientResolvedConfig> {
    readonly input: DisableProactiveEngagementCommandInput;
    constructor(input: DisableProactiveEngagementCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableProactiveEngagementCommandInput, DisableProactiveEngagementCommandOutput>;
    private serialize;
    private deserialize;
}
