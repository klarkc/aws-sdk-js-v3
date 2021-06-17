import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteUsageLimitMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteUsageLimitCommandInput extends DeleteUsageLimitMessage {
}
export interface DeleteUsageLimitCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a usage limit from a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteUsageLimitCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteUsageLimitCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteUsageLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUsageLimitCommandInput} for command's `input` shape.
 * @see {@link DeleteUsageLimitCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteUsageLimitCommand extends $Command<DeleteUsageLimitCommandInput, DeleteUsageLimitCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DeleteUsageLimitCommandInput;
    constructor(input: DeleteUsageLimitCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUsageLimitCommandInput, DeleteUsageLimitCommandOutput>;
    private serialize;
    private deserialize;
}
