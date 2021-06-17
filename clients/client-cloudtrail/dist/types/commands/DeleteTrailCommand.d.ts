import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { DeleteTrailRequest, DeleteTrailResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTrailCommandInput extends DeleteTrailRequest {
}
export interface DeleteTrailCommandOutput extends DeleteTrailResponse, __MetadataBearer {
}
/**
 * <p>Deletes a trail. This operation must be called from the region in which the trail was
 *          created. <code>DeleteTrail</code> cannot be called on the shadow trails (replicated trails
 *          in other regions) of a trail that is enabled in all regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, DeleteTrailCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, DeleteTrailCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new DeleteTrailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrailCommandInput} for command's `input` shape.
 * @see {@link DeleteTrailCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTrailCommand extends $Command<DeleteTrailCommandInput, DeleteTrailCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: DeleteTrailCommandInput;
    constructor(input: DeleteTrailCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTrailCommandInput, DeleteTrailCommandOutput>;
    private serialize;
    private deserialize;
}
