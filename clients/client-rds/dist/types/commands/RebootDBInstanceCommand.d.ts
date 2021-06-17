import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RebootDBInstanceMessage, RebootDBInstanceResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RebootDBInstanceCommandInput extends RebootDBInstanceMessage {
}
export interface RebootDBInstanceCommandOutput extends RebootDBInstanceResult, __MetadataBearer {
}
/**
 * <p>You might need to reboot your DB instance, usually for maintenance reasons.
 *         For example, if you make certain modifications,
 *         or if you change the DB parameter group associated with the DB instance,
 *         you must reboot the instance for the changes to take effect.
 *     </p>
 *
 *          <p>Rebooting a DB instance restarts the database engine service.
 *         Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.
 *     </p>
 *
 *          <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RebootDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RebootDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RebootDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootDBInstanceCommandInput} for command's `input` shape.
 * @see {@link RebootDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RebootDBInstanceCommand extends $Command<RebootDBInstanceCommandInput, RebootDBInstanceCommandOutput, RDSClientResolvedConfig> {
    readonly input: RebootDBInstanceCommandInput;
    constructor(input: RebootDBInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebootDBInstanceCommandInput, RebootDBInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
