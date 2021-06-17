import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { UpdateResourceShareRequest, UpdateResourceShareResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateResourceShareCommandInput extends UpdateResourceShareRequest {
}
export interface UpdateResourceShareCommandOutput extends UpdateResourceShareResponse, __MetadataBearer {
}
/**
 * <p>Updates the specified resource share that you own.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, UpdateResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, UpdateResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new UpdateResourceShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceShareCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceShareCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateResourceShareCommand extends $Command<UpdateResourceShareCommandInput, UpdateResourceShareCommandOutput, RAMClientResolvedConfig> {
    readonly input: UpdateResourceShareCommandInput;
    constructor(input: UpdateResourceShareCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateResourceShareCommandInput, UpdateResourceShareCommandOutput>;
    private serialize;
    private deserialize;
}
