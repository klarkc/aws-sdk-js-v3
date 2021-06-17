import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { EnableProactiveEngagementRequest, EnableProactiveEngagementResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableProactiveEngagementCommandInput extends EnableProactiveEngagementRequest {
}
export interface EnableProactiveEngagementCommandOutput extends EnableProactiveEngagementResponse, __MetadataBearer {
}
/**
 * <p>Authorizes the DDoS Response Team (DRT) to use email and phone to notify contacts about escalations to the DRT and to initiate proactive customer support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, EnableProactiveEngagementCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, EnableProactiveEngagementCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new EnableProactiveEngagementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableProactiveEngagementCommandInput} for command's `input` shape.
 * @see {@link EnableProactiveEngagementCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableProactiveEngagementCommand extends $Command<EnableProactiveEngagementCommandInput, EnableProactiveEngagementCommandOutput, ShieldClientResolvedConfig> {
    readonly input: EnableProactiveEngagementCommandInput;
    constructor(input: EnableProactiveEngagementCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableProactiveEngagementCommandInput, EnableProactiveEngagementCommandOutput>;
    private serialize;
    private deserialize;
}
