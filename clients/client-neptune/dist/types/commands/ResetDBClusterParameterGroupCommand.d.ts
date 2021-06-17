import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DBClusterParameterGroupNameMessage, ResetDBClusterParameterGroupMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResetDBClusterParameterGroupCommandInput extends ResetDBClusterParameterGroupMessage {
}
export interface ResetDBClusterParameterGroupCommandOutput extends DBClusterParameterGroupNameMessage, __MetadataBearer {
}
/**
 * <p> Modifies the parameters of a DB cluster parameter group to the default value. To reset
 *       specific parameters submit a list of the following: <code>ParameterName</code> and
 *       <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the
 *       <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p>
 *          <p> When resetting the entire group, dynamic parameters are updated immediately and static
 *       parameters are set to <code>pending-reboot</code> to take effect on the next DB instance
 *       restart or <a>RebootDBInstance</a> request. You must call <a>RebootDBInstance</a> for every DB instance in your DB cluster
 *       that you want the updated static parameter to apply to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ResetDBClusterParameterGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ResetDBClusterParameterGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new ResetDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResetDBClusterParameterGroupCommand extends $Command<ResetDBClusterParameterGroupCommandInput, ResetDBClusterParameterGroupCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: ResetDBClusterParameterGroupCommandInput;
    constructor(input: ResetDBClusterParameterGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetDBClusterParameterGroupCommandInput, ResetDBClusterParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
