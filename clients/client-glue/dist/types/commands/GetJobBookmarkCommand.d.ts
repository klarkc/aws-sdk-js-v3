import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetJobBookmarkRequest } from "../models/models_0";
import { GetJobBookmarkResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetJobBookmarkCommandInput extends GetJobBookmarkRequest {
}
export interface GetJobBookmarkCommandOutput extends GetJobBookmarkResponse, __MetadataBearer {
}
/**
 * <p>Returns information on a job bookmark entry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetJobBookmarkCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetJobBookmarkCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetJobBookmarkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobBookmarkCommandInput} for command's `input` shape.
 * @see {@link GetJobBookmarkCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetJobBookmarkCommand extends $Command<GetJobBookmarkCommandInput, GetJobBookmarkCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetJobBookmarkCommandInput;
    constructor(input: GetJobBookmarkCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJobBookmarkCommandInput, GetJobBookmarkCommandOutput>;
    private serialize;
    private deserialize;
}
