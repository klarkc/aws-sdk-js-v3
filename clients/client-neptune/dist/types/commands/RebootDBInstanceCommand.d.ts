import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { RebootDBInstanceMessage, RebootDBInstanceResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RebootDBInstanceCommandInput extends RebootDBInstanceMessage {
}
export interface RebootDBInstanceCommandOutput extends RebootDBInstanceResult, __MetadataBearer {
}
/**
 * <p>You might need to reboot your DB instance, usually for maintenance reasons. For example,
 *       if you make certain modifications, or if you change the DB parameter group associated with the
 *       DB instance, you must reboot the instance for the changes to take effect.</p>
 *          <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance
 *       results in a momentary outage, during which the DB instance status is set to rebooting.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, RebootDBInstanceCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, RebootDBInstanceCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new RebootDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootDBInstanceCommandInput} for command's `input` shape.
 * @see {@link RebootDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RebootDBInstanceCommand extends $Command<RebootDBInstanceCommandInput, RebootDBInstanceCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: RebootDBInstanceCommandInput;
    constructor(input: RebootDBInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebootDBInstanceCommandInput, RebootDBInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
