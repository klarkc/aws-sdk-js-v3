import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DeleteDBSubnetGroupMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDBSubnetGroupCommandInput extends DeleteDBSubnetGroupMessage {
}
export interface DeleteDBSubnetGroupCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a subnet group.</p>
 *         <note>
 *             <p>The specified database subnet group must not be associated with any DB
 *                 instances.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DeleteDBSubnetGroupCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DeleteDBSubnetGroupCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DeleteDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDBSubnetGroupCommand extends $Command<DeleteDBSubnetGroupCommandInput, DeleteDBSubnetGroupCommandOutput, DocDBClientResolvedConfig> {
    readonly input: DeleteDBSubnetGroupCommandInput;
    constructor(input: DeleteDBSubnetGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDBSubnetGroupCommandInput, DeleteDBSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
