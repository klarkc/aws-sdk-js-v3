import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteFleetsRequest, DeleteFleetsResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFleetsCommandInput extends DeleteFleetsRequest {
}
export interface DeleteFleetsCommandOutput extends DeleteFleetsResult, __MetadataBearer {
}
/**
 * <p>Deletes the specified EC2 Fleet.</p>
 *          <p>After you delete an EC2 Fleet, it launches no new instances.</p>
 *          <p>You must specify whether a deleted EC2 Fleet should also terminate its instances. If you
 *          choose to terminate the instances, the EC2 Fleet enters the <code>deleted_terminating</code>
 *          state. Otherwise, the EC2 Fleet enters the <code>deleted_running</code> state, and the instances
 *          continue to run until they are interrupted or you terminate them manually.</p>
 *          <p>For <code>instant</code> fleets, EC2 Fleet must terminate the instances when the fleet is
 *          deleted. A deleted <code>instant</code> fleet with running instances is not
 *          supported.</p>
 *          <p class="title">
 *             <b>Restrictions</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>You can delete up to 25 <code>instant</code> fleets in a single request. If you exceed this
 *                number, no <code>instant</code> fleets are deleted and an error is returned. There is no
 *                restriction on the number of fleets of type <code>maintain</code> or <code>request</code> that can be deleted
 *                in a single request.</p>
 *             </li>
 *             <li>
 *                <p>Up to 1000 instances can be terminated in a single request to delete
 *                <code>instant</code> fleets.</p>
 *             </li>
 *          </ul>
 *
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#delete-fleet">Deleting an EC2
 *          Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteFleetsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteFleetsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteFleetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFleetsCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFleetsCommand extends $Command<DeleteFleetsCommandInput, DeleteFleetsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteFleetsCommandInput;
    constructor(input: DeleteFleetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFleetsCommandInput, DeleteFleetsCommandOutput>;
    private serialize;
    private deserialize;
}
