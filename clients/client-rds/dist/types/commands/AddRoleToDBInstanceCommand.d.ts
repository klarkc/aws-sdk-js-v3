import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { AddRoleToDBInstanceMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddRoleToDBInstanceCommandInput extends AddRoleToDBInstanceMessage {
}
export interface AddRoleToDBInstanceCommandOutput extends __MetadataBearer {
}
/**
 * <p>Associates an AWS Identity and Access Management (IAM) role with a DB instance.</p>
 *         <note>
 *             <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, AddRoleToDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, AddRoleToDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new AddRoleToDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddRoleToDBInstanceCommandInput} for command's `input` shape.
 * @see {@link AddRoleToDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddRoleToDBInstanceCommand extends $Command<AddRoleToDBInstanceCommandInput, AddRoleToDBInstanceCommandOutput, RDSClientResolvedConfig> {
    readonly input: AddRoleToDBInstanceCommandInput;
    constructor(input: AddRoleToDBInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddRoleToDBInstanceCommandInput, AddRoleToDBInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
