import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyClusterDbRevisionMessage, ModifyClusterDbRevisionResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyClusterDbRevisionCommandInput extends ModifyClusterDbRevisionMessage {
}
export interface ModifyClusterDbRevisionCommandOutput extends ModifyClusterDbRevisionResult, __MetadataBearer {
}
/**
 * <p>Modifies the database revision of a cluster. The database revision is a unique
 *             revision of the database running in a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterDbRevisionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterDbRevisionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyClusterDbRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterDbRevisionCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterDbRevisionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyClusterDbRevisionCommand extends $Command<ModifyClusterDbRevisionCommandInput, ModifyClusterDbRevisionCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifyClusterDbRevisionCommandInput;
    constructor(input: ModifyClusterDbRevisionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyClusterDbRevisionCommandInput, ModifyClusterDbRevisionCommandOutput>;
    private serialize;
    private deserialize;
}
