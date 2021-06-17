import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateDBClusterMessage, CreateDBClusterResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDBClusterCommandInput extends CreateDBClusterMessage {
}
export interface CreateDBClusterCommandOutput extends CreateDBClusterResult, __MetadataBearer {
}
/**
 * <p>Creates a new Amazon Aurora DB cluster.</p>
 *          <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB
 *             cluster as a read replica of another DB cluster or Amazon RDS MySQL DB instance. For
 *             cross-region replication where the DB cluster identified by
 *                 <code>ReplicationSourceIdentifier</code> is encrypted, you must also specify the
 *                 <code>PreSignedUrl</code> parameter.</p>
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
 * import { RDSClient, CreateDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBClusterCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDBClusterCommand extends $Command<CreateDBClusterCommandInput, CreateDBClusterCommandOutput, RDSClientResolvedConfig> {
    readonly input: CreateDBClusterCommandInput;
    constructor(input: CreateDBClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBClusterCommandInput, CreateDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
