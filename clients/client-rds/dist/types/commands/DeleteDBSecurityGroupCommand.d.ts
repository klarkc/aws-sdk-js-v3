import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteDBSecurityGroupMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDBSecurityGroupCommandInput extends DeleteDBSecurityGroupMessage {
}
export interface DeleteDBSecurityGroupCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a DB security group.</p>
 *          <note>
 *             <p>The specified DB security group must not be associated with any DB instances.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBSecurityGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBSecurityGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteDBSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDBSecurityGroupCommand extends $Command<DeleteDBSecurityGroupCommandInput, DeleteDBSecurityGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeleteDBSecurityGroupCommandInput;
    constructor(input: DeleteDBSecurityGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDBSecurityGroupCommandInput, DeleteDBSecurityGroupCommandOutput>;
    private serialize;
    private deserialize;
}
