import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";
import { StopCanaryRequest, StopCanaryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopCanaryCommandInput extends StopCanaryRequest {
}
export interface StopCanaryCommandOutput extends StopCanaryResponse, __MetadataBearer {
}
/**
 * <p>Stops the canary to prevent all future runs. If the canary is currently running,
 *          Synthetics stops waiting for the current run of the specified canary to complete. The
 *         run that is in progress completes on its own, publishes metrics, and uploads artifacts, but
 *          it is not recorded in Synthetics as a completed run.</p>
 *          <p>You can use <code>StartCanary</code> to start it running again
 *          with the canary’s current schedule at any point in the future.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, StopCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, StopCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new StopCanaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopCanaryCommandInput} for command's `input` shape.
 * @see {@link StopCanaryCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopCanaryCommand extends $Command<StopCanaryCommandInput, StopCanaryCommandOutput, SyntheticsClientResolvedConfig> {
    readonly input: StopCanaryCommandInput;
    constructor(input: StopCanaryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SyntheticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopCanaryCommandInput, StopCanaryCommandOutput>;
    private serialize;
    private deserialize;
}
