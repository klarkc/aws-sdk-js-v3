import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { DeleteResourceShareRequest, DeleteResourceShareResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteResourceShareCommandInput extends DeleteResourceShareRequest {
}
export interface DeleteResourceShareCommandOutput extends DeleteResourceShareResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, DeleteResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, DeleteResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new DeleteResourceShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourceShareCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceShareCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteResourceShareCommand extends $Command<DeleteResourceShareCommandInput, DeleteResourceShareCommandOutput, RAMClientResolvedConfig> {
    readonly input: DeleteResourceShareCommandInput;
    constructor(input: DeleteResourceShareCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResourceShareCommandInput, DeleteResourceShareCommandOutput>;
    private serialize;
    private deserialize;
}
