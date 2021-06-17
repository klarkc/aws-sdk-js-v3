import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { UpdateIndexRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateIndexCommandInput extends UpdateIndexRequest {
}
export interface UpdateIndexCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates an existing Amazon Kendra index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, UpdateIndexCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, UpdateIndexCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new UpdateIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIndexCommandInput} for command's `input` shape.
 * @see {@link UpdateIndexCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateIndexCommand extends $Command<UpdateIndexCommandInput, UpdateIndexCommandOutput, KendraClientResolvedConfig> {
    readonly input: UpdateIndexCommandInput;
    constructor(input: UpdateIndexCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateIndexCommandInput, UpdateIndexCommandOutput>;
    private serialize;
    private deserialize;
}
