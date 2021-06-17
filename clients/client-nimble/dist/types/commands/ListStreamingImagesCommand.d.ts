import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { ListStreamingImagesRequest, ListStreamingImagesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListStreamingImagesCommandInput extends ListStreamingImagesRequest {
}
export interface ListStreamingImagesCommandOutput extends ListStreamingImagesResponse, __MetadataBearer {
}
/**
 * <p>List the streaming image resources available to this studio.</p> <p>This list will contain both images provided by AWS, as well as streaming images that you have created in your studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListStreamingImagesCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListStreamingImagesCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListStreamingImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStreamingImagesCommandInput} for command's `input` shape.
 * @see {@link ListStreamingImagesCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListStreamingImagesCommand extends $Command<ListStreamingImagesCommandInput, ListStreamingImagesCommandOutput, NimbleClientResolvedConfig> {
    readonly input: ListStreamingImagesCommandInput;
    constructor(input: ListStreamingImagesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStreamingImagesCommandInput, ListStreamingImagesCommandOutput>;
    private serialize;
    private deserialize;
}
