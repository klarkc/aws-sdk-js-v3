import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteTriggerRequest, DeleteTriggerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTriggerCommandInput extends DeleteTriggerRequest {
}
export interface DeleteTriggerCommandOutput extends DeleteTriggerResponse, __MetadataBearer {
}
/**
 * <p>Deletes a specified trigger. If the trigger is not found, no
 *       exception is thrown.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteTriggerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteTriggerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteTriggerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTriggerCommandInput} for command's `input` shape.
 * @see {@link DeleteTriggerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTriggerCommand extends $Command<DeleteTriggerCommandInput, DeleteTriggerCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteTriggerCommandInput;
    constructor(input: DeleteTriggerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTriggerCommandInput, DeleteTriggerCommandOutput>;
    private serialize;
    private deserialize;
}
