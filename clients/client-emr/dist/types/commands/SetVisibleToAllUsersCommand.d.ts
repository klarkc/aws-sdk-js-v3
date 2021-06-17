import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { SetVisibleToAllUsersInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetVisibleToAllUsersCommandInput extends SetVisibleToAllUsersInput {
}
export interface SetVisibleToAllUsersCommandOutput extends __MetadataBearer {
}
/**
 * <p>Sets the <a>Cluster$VisibleToAllUsers</a> value, which determines whether the
 *          cluster is visible to all IAM users of the AWS account associated with the cluster. Only
 *          the IAM user who created the cluster or the AWS account root user can call this action. The
 *          default value, <code>true</code>, indicates that all IAM users in the AWS account can
 *          perform cluster actions if they have the proper IAM policy permissions. If set to
 *             <code>false</code>, only the IAM user that created the cluster can perform actions. This
 *          action works on running clusters. You can override the default <code>true</code> setting
 *          when you create a cluster by using the <code>VisibleToAllUsers</code> parameter with
 *             <code>RunJobFlow</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, SetVisibleToAllUsersCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, SetVisibleToAllUsersCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new SetVisibleToAllUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetVisibleToAllUsersCommandInput} for command's `input` shape.
 * @see {@link SetVisibleToAllUsersCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetVisibleToAllUsersCommand extends $Command<SetVisibleToAllUsersCommandInput, SetVisibleToAllUsersCommandOutput, EMRClientResolvedConfig> {
    readonly input: SetVisibleToAllUsersCommandInput;
    constructor(input: SetVisibleToAllUsersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetVisibleToAllUsersCommandInput, SetVisibleToAllUsersCommandOutput>;
    private serialize;
    private deserialize;
}
