import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClusterParameterGroupNameMessage } from "../models/models_0";
import { ResetClusterParameterGroupMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResetClusterParameterGroupCommandInput extends ResetClusterParameterGroupMessage {
}
export interface ResetClusterParameterGroupCommandOutput extends ClusterParameterGroupNameMessage, __MetadataBearer {
}
/**
 * <p>Sets one or more parameters of the specified parameter group to their default
 *             values and sets the source values of the parameters to "engine-default". To reset the
 *             entire parameter group specify the <i>ResetAllParameters</i> parameter.
 *             For parameter changes to take effect you must reboot any associated clusters. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ResetClusterParameterGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ResetClusterParameterGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ResetClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResetClusterParameterGroupCommand extends $Command<ResetClusterParameterGroupCommandInput, ResetClusterParameterGroupCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ResetClusterParameterGroupCommandInput;
    constructor(input: ResetClusterParameterGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetClusterParameterGroupCommandInput, ResetClusterParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
