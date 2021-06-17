import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetTagsRequest, GetTagsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTagsCommandInput extends GetTagsRequest {
}
export interface GetTagsCommandOutput extends GetTagsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a list of tags associated with a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetTagsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetTagsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTagsCommandInput} for command's `input` shape.
 * @see {@link GetTagsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTagsCommand extends $Command<GetTagsCommandInput, GetTagsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetTagsCommandInput;
    constructor(input: GetTagsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTagsCommandInput, GetTagsCommandOutput>;
    private serialize;
    private deserialize;
}
