import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RemoveRoleFromDBInstanceMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemoveRoleFromDBInstanceCommandInput extends RemoveRoleFromDBInstanceMessage {
}
export interface RemoveRoleFromDBInstanceCommandOutput extends __MetadataBearer {
}
/**
 * <p>Disassociates an AWS Identity and Access Management (IAM) role from a DB instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RemoveRoleFromDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RemoveRoleFromDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RemoveRoleFromDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveRoleFromDBInstanceCommandInput} for command's `input` shape.
 * @see {@link RemoveRoleFromDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveRoleFromDBInstanceCommand extends $Command<RemoveRoleFromDBInstanceCommandInput, RemoveRoleFromDBInstanceCommandOutput, RDSClientResolvedConfig> {
    readonly input: RemoveRoleFromDBInstanceCommandInput;
    constructor(input: RemoveRoleFromDBInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveRoleFromDBInstanceCommandInput, RemoveRoleFromDBInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
