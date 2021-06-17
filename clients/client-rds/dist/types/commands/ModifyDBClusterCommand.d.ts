import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyDBClusterMessage, ModifyDBClusterResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyDBClusterCommandInput extends ModifyDBClusterMessage {
}
export interface ModifyDBClusterCommandOutput extends ModifyDBClusterResult, __MetadataBearer {
}
/**
 * <p>Modify a setting for an Amazon Aurora DB cluster.
 *            You can change one
 *            or more database configuration parameters by specifying these parameters and the new values in the
 *            request. For more information on Amazon Aurora, see
 *            <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyDBClusterCommand extends $Command<ModifyDBClusterCommandInput, ModifyDBClusterCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyDBClusterCommandInput;
    constructor(input: ModifyDBClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBClusterCommandInput, ModifyDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
