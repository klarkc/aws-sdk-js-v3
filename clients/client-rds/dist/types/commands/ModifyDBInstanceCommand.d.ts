import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyDBInstanceMessage, ModifyDBInstanceResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyDBInstanceCommandInput extends ModifyDBInstanceMessage {
}
export interface ModifyDBInstanceCommandOutput extends ModifyDBInstanceResult, __MetadataBearer {
}
/**
 * <p>Modifies settings for a DB instance.
 *           You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
 *             To learn what modifications you can make to your DB instance,
 *             call <code>DescribeValidDBInstanceModifications</code>
 *             before you call <code>ModifyDBInstance</code>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBInstanceCommandInput} for command's `input` shape.
 * @see {@link ModifyDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyDBInstanceCommand extends $Command<ModifyDBInstanceCommandInput, ModifyDBInstanceCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyDBInstanceCommandInput;
    constructor(input: ModifyDBInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBInstanceCommandInput, ModifyDBInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
