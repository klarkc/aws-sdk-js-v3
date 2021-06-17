import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ResetJobBookmarkRequest, ResetJobBookmarkResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResetJobBookmarkCommandInput extends ResetJobBookmarkRequest {
}
export interface ResetJobBookmarkCommandOutput extends ResetJobBookmarkResponse, __MetadataBearer {
}
/**
 * <p>Resets a bookmark entry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ResetJobBookmarkCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ResetJobBookmarkCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ResetJobBookmarkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetJobBookmarkCommandInput} for command's `input` shape.
 * @see {@link ResetJobBookmarkCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResetJobBookmarkCommand extends $Command<ResetJobBookmarkCommandInput, ResetJobBookmarkCommandOutput, GlueClientResolvedConfig> {
    readonly input: ResetJobBookmarkCommandInput;
    constructor(input: ResetJobBookmarkCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetJobBookmarkCommandInput, ResetJobBookmarkCommandOutput>;
    private serialize;
    private deserialize;
}
