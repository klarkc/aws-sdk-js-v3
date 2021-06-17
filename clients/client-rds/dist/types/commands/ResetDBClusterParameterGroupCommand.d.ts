import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBClusterParameterGroupNameMessage, ResetDBClusterParameterGroupMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResetDBClusterParameterGroupCommandInput extends ResetDBClusterParameterGroupMessage {
}
export interface ResetDBClusterParameterGroupCommandOutput extends DBClusterParameterGroupNameMessage, __MetadataBearer {
}
/**
 * <p>
 *             Modifies the parameters of a DB cluster parameter group to the default value. To
 *             reset specific parameters submit a list of the following: <code>ParameterName</code>
 *             and <code>ApplyMethod</code>. To reset the
 *             entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code>
 *             and <code>ResetAllParameters</code> parameters.
 *         </p>
 *             <p>
 *             When resetting the entire group, dynamic parameters are updated immediately and static parameters
 *             are set to <code>pending-reboot</code> to take effect on the next DB instance restart
 *             or <code>RebootDBInstance</code> request. You must call <code>RebootDBInstance</code> for every
 *             DB instance in your DB cluster that you want the updated static parameter to apply to.</p>
 *
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ResetDBClusterParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ResetDBClusterParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ResetDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResetDBClusterParameterGroupCommand extends $Command<ResetDBClusterParameterGroupCommandInput, ResetDBClusterParameterGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: ResetDBClusterParameterGroupCommandInput;
    constructor(input: ResetDBClusterParameterGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetDBClusterParameterGroupCommandInput, ResetDBClusterParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
