import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DisassociateHealthCheckRequest, DisassociateHealthCheckResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateHealthCheckCommandInput extends DisassociateHealthCheckRequest {
}
export interface DisassociateHealthCheckCommandOutput extends DisassociateHealthCheckResponse, __MetadataBearer {
}
/**
 * <p>Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your AWS resource to improve responsiveness and accuracy in attack detection and mitigation. </p>
 *          <p>You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DisassociateHealthCheckCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DisassociateHealthCheckCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DisassociateHealthCheckCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateHealthCheckCommandInput} for command's `input` shape.
 * @see {@link DisassociateHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateHealthCheckCommand extends $Command<DisassociateHealthCheckCommandInput, DisassociateHealthCheckCommandOutput, ShieldClientResolvedConfig> {
    readonly input: DisassociateHealthCheckCommandInput;
    constructor(input: DisassociateHealthCheckCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateHealthCheckCommandInput, DisassociateHealthCheckCommandOutput>;
    private serialize;
    private deserialize;
}
