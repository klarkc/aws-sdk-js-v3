import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { UpdateStudioComponentRequest, UpdateStudioComponentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateStudioComponentCommandInput extends UpdateStudioComponentRequest {
}
export interface UpdateStudioComponentCommandOutput extends UpdateStudioComponentResponse, __MetadataBearer {
}
/**
 * <p>Updates a studio component resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, UpdateStudioComponentCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, UpdateStudioComponentCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new UpdateStudioComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStudioComponentCommandInput} for command's `input` shape.
 * @see {@link UpdateStudioComponentCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateStudioComponentCommand extends $Command<UpdateStudioComponentCommandInput, UpdateStudioComponentCommandOutput, NimbleClientResolvedConfig> {
    readonly input: UpdateStudioComponentCommandInput;
    constructor(input: UpdateStudioComponentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateStudioComponentCommandInput, UpdateStudioComponentCommandOutput>;
    private serialize;
    private deserialize;
}
