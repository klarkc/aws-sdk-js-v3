import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DeleteDBSubnetGroupMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDBSubnetGroupCommandInput extends DeleteDBSubnetGroupMessage {
}
export interface DeleteDBSubnetGroupCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a DB subnet group.</p>
 *          <note>
 *             <p>The specified database subnet group must not be associated with any DB instances.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DeleteDBSubnetGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DeleteDBSubnetGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DeleteDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDBSubnetGroupCommand extends $Command<DeleteDBSubnetGroupCommandInput, DeleteDBSubnetGroupCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: DeleteDBSubnetGroupCommandInput;
    constructor(input: DeleteDBSubnetGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDBSubnetGroupCommandInput, DeleteDBSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
