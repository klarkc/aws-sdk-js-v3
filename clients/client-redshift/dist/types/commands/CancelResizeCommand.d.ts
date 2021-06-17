import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CancelResizeMessage, ResizeProgressMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelResizeCommandInput extends CancelResizeMessage {
}
export interface CancelResizeCommandOutput extends ResizeProgressMessage, __MetadataBearer {
}
/**
 * <p>Cancels a resize operation for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CancelResizeCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CancelResizeCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CancelResizeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelResizeCommandInput} for command's `input` shape.
 * @see {@link CancelResizeCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelResizeCommand extends $Command<CancelResizeCommandInput, CancelResizeCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: CancelResizeCommandInput;
    constructor(input: CancelResizeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelResizeCommandInput, CancelResizeCommandOutput>;
    private serialize;
    private deserialize;
}
