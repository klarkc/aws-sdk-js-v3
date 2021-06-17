import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DeleteInventoryRequest, DeleteInventoryResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteInventoryCommandInput extends DeleteInventoryRequest {
}
export interface DeleteInventoryCommandOutput extends DeleteInventoryResult, __MetadataBearer {
}
/**
 * <p>Delete a custom inventory type or the data associated with a custom Inventory type. Deleting
 *    a custom inventory type is also referred to as deleting a custom inventory schema.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteInventoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteInventoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteInventoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInventoryCommandInput} for command's `input` shape.
 * @see {@link DeleteInventoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteInventoryCommand extends $Command<DeleteInventoryCommandInput, DeleteInventoryCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteInventoryCommandInput;
    constructor(input: DeleteInventoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInventoryCommandInput, DeleteInventoryCommandOutput>;
    private serialize;
    private deserialize;
}
