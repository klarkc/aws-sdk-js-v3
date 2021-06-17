import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { ModifyDBInstanceMessage, ModifyDBInstanceResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyDBInstanceCommandInput extends ModifyDBInstanceMessage {
}
export interface ModifyDBInstanceCommandOutput extends ModifyDBInstanceResult, __MetadataBearer {
}
/**
 * <p>Modifies settings for an instance. You can change one or more database configuration
 *             parameters by specifying these parameters and the new values in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, ModifyDBInstanceCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, ModifyDBInstanceCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new ModifyDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBInstanceCommandInput} for command's `input` shape.
 * @see {@link ModifyDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyDBInstanceCommand extends $Command<ModifyDBInstanceCommandInput, ModifyDBInstanceCommandOutput, DocDBClientResolvedConfig> {
    readonly input: ModifyDBInstanceCommandInput;
    constructor(input: ModifyDBInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBInstanceCommandInput, ModifyDBInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
