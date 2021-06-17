import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CancelSpotFleetRequestsRequest, CancelSpotFleetRequestsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelSpotFleetRequestsCommandInput extends CancelSpotFleetRequestsRequest {
}
export interface CancelSpotFleetRequestsCommandOutput extends CancelSpotFleetRequestsResponse, __MetadataBearer {
}
/**
 * <p>Cancels the specified Spot Fleet requests.</p>
 *          <p>After you cancel a Spot Fleet request, the Spot Fleet launches no new Spot Instances.
 *        You must specify whether the Spot Fleet should also terminate its Spot Instances.
 *        If you terminate the instances, the Spot Fleet request enters the <code>cancelled_terminating</code> state.
 *        Otherwise, the Spot Fleet request enters the <code>cancelled_running</code> state and the instances
 *        continue to run until they are interrupted or you terminate them manually.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelSpotFleetRequestsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelSpotFleetRequestsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CancelSpotFleetRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelSpotFleetRequestsCommandInput} for command's `input` shape.
 * @see {@link CancelSpotFleetRequestsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelSpotFleetRequestsCommand extends $Command<CancelSpotFleetRequestsCommandInput, CancelSpotFleetRequestsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CancelSpotFleetRequestsCommandInput;
    constructor(input: CancelSpotFleetRequestsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelSpotFleetRequestsCommandInput, CancelSpotFleetRequestsCommandOutput>;
    private serialize;
    private deserialize;
}
