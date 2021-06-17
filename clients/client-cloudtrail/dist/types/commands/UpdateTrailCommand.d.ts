import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { UpdateTrailRequest, UpdateTrailResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateTrailCommandInput extends UpdateTrailRequest {
}
export interface UpdateTrailCommandOutput extends UpdateTrailResponse, __MetadataBearer {
}
/**
 * <p>Updates the settings that specify delivery of log files. Changes to a trail do not require
 *          stopping the CloudTrail service. Use this action to designate an existing bucket for log
 *          delivery. If the existing bucket has previously been a target for CloudTrail log files,
 *          an IAM policy exists for the bucket. <code>UpdateTrail</code> must be called from the
 *          region in which the trail was created; otherwise, an
 *             <code>InvalidHomeRegionException</code> is thrown.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, UpdateTrailCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, UpdateTrailCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new UpdateTrailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTrailCommandInput} for command's `input` shape.
 * @see {@link UpdateTrailCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateTrailCommand extends $Command<UpdateTrailCommandInput, UpdateTrailCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: UpdateTrailCommandInput;
    constructor(input: UpdateTrailCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTrailCommandInput, UpdateTrailCommandOutput>;
    private serialize;
    private deserialize;
}
