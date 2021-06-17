import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClusterParameterGroupNameMessage } from "../models/models_0";
import { ModifyClusterParameterGroupMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyClusterParameterGroupCommandInput extends ModifyClusterParameterGroupMessage {
}
export interface ModifyClusterParameterGroupCommandOutput extends ClusterParameterGroupNameMessage, __MetadataBearer {
}
/**
 * <p>Modifies the parameters of a parameter group.</p>
 *         <p>
 * For more information about parameters and parameter groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterParameterGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterParameterGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyClusterParameterGroupCommand extends $Command<ModifyClusterParameterGroupCommandInput, ModifyClusterParameterGroupCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifyClusterParameterGroupCommandInput;
    constructor(input: ModifyClusterParameterGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyClusterParameterGroupCommandInput, ModifyClusterParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
