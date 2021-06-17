import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { AddTagsToResourceInput, AddTagsToResourceOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddTagsToResourceCommandInput extends AddTagsToResourceInput {
}
export interface AddTagsToResourceCommandOutput extends AddTagsToResourceOutput, __MetadataBearer {
}
/**
 * <p>Adds one or more tags to the specified resource. You use tags to add metadata to
 *          resources, which you can use to categorize these resources. For example, you can categorize
 *          resources by purpose, owner, environment, or team. Each tag consists of a key and a value,
 *          which you define. You can add tags to the following AWS Storage Gateway resources:</p>
 *
 *          <ul>
 *             <li>
 *                <p>Storage gateways of all types</p>
 *             </li>
 *             <li>
 *                <p>Storage volumes</p>
 *             </li>
 *             <li>
 *                <p>Virtual tapes</p>
 *             </li>
 *             <li>
 *                <p>NFS and SMB file shares</p>
 *             </li>
 *          </ul>
 *
 *          <p>You can create a maximum of 50 tags for each resource. Virtual tapes and storage volumes
 *          that are recovered to a new gateway maintain their tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AddTagsToResourceCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AddTagsToResourceCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new AddTagsToResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsToResourceCommandInput} for command's `input` shape.
 * @see {@link AddTagsToResourceCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddTagsToResourceCommand extends $Command<AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: AddTagsToResourceCommandInput;
    constructor(input: AddTagsToResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput>;
    private serialize;
    private deserialize;
}
