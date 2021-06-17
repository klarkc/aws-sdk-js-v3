import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { StopLoggingRequest, StopLoggingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopLoggingCommandInput extends StopLoggingRequest {
}
export interface StopLoggingCommandOutput extends StopLoggingResponse, __MetadataBearer {
}
/**
 * <p>Suspends the recording of AWS API calls and log file delivery for the specified trail.
 *          Under most circumstances, there is no need to use this action. You can update a trail
 *          without stopping it first. This action is the only way to stop recording. For a trail
 *          enabled in all regions, this operation must be called from the region in which the trail
 *          was created, or an <code>InvalidHomeRegionException</code> will occur. This operation
 *          cannot be called on the shadow trails (replicated trails in other regions) of a trail
 *          enabled in all regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, StopLoggingCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, StopLoggingCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new StopLoggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopLoggingCommandInput} for command's `input` shape.
 * @see {@link StopLoggingCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopLoggingCommand extends $Command<StopLoggingCommandInput, StopLoggingCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: StopLoggingCommandInput;
    constructor(input: StopLoggingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopLoggingCommandInput, StopLoggingCommandOutput>;
    private serialize;
    private deserialize;
}
