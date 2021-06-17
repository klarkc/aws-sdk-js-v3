import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListImageBuildVersionsRequest, ListImageBuildVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListImageBuildVersionsCommandInput extends ListImageBuildVersionsRequest {
}
export interface ListImageBuildVersionsCommandOutput extends ListImageBuildVersionsResponse, __MetadataBearer {
}
/**
 * <p> Returns a list of image build versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImageBuildVersionsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImageBuildVersionsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListImageBuildVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImageBuildVersionsCommandInput} for command's `input` shape.
 * @see {@link ListImageBuildVersionsCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListImageBuildVersionsCommand extends $Command<ListImageBuildVersionsCommandInput, ListImageBuildVersionsCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: ListImageBuildVersionsCommandInput;
    constructor(input: ListImageBuildVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListImageBuildVersionsCommandInput, ListImageBuildVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
