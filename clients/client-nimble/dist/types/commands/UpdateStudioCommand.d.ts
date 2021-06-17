import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { UpdateStudioRequest, UpdateStudioResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateStudioCommandInput extends UpdateStudioRequest {
}
export interface UpdateStudioCommandOutput extends UpdateStudioResponse, __MetadataBearer {
}
/**
 * <p>Update a Studio resource.</p> <p>Currently, this operation only supports updating the displayName of your studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, UpdateStudioCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, UpdateStudioCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new UpdateStudioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStudioCommandInput} for command's `input` shape.
 * @see {@link UpdateStudioCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateStudioCommand extends $Command<UpdateStudioCommandInput, UpdateStudioCommandOutput, NimbleClientResolvedConfig> {
    readonly input: UpdateStudioCommandInput;
    constructor(input: UpdateStudioCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateStudioCommandInput, UpdateStudioCommandOutput>;
    private serialize;
    private deserialize;
}
