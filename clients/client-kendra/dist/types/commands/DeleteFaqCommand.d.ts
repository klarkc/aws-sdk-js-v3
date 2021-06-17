import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { DeleteFaqRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFaqCommandInput extends DeleteFaqRequest {
}
export interface DeleteFaqCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes an FAQ from an index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DeleteFaqCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DeleteFaqCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DeleteFaqCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFaqCommandInput} for command's `input` shape.
 * @see {@link DeleteFaqCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFaqCommand extends $Command<DeleteFaqCommandInput, DeleteFaqCommandOutput, KendraClientResolvedConfig> {
    readonly input: DeleteFaqCommandInput;
    constructor(input: DeleteFaqCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFaqCommandInput, DeleteFaqCommandOutput>;
    private serialize;
    private deserialize;
}
