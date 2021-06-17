import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyClusterIamRolesMessage, ModifyClusterIamRolesResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyClusterIamRolesCommandInput extends ModifyClusterIamRolesMessage {
}
export interface ModifyClusterIamRolesCommandOutput extends ModifyClusterIamRolesResult, __MetadataBearer {
}
/**
 * <p>Modifies the list of AWS Identity and Access Management (IAM) roles that can be
 *             used by the cluster to access other AWS services.</p>
 *         <p>A cluster can have up to 10 IAM roles associated at any time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterIamRolesCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterIamRolesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyClusterIamRolesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterIamRolesCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterIamRolesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyClusterIamRolesCommand extends $Command<ModifyClusterIamRolesCommandInput, ModifyClusterIamRolesCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifyClusterIamRolesCommandInput;
    constructor(input: ModifyClusterIamRolesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyClusterIamRolesCommandInput, ModifyClusterIamRolesCommandOutput>;
    private serialize;
    private deserialize;
}
