import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { ListImagesRequest, ListImagesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListImagesCommandInput extends ListImagesRequest {
}
export interface ListImagesCommandOutput extends ListImagesResponse, __MetadataBearer {
}
/**
 * <p>Lists all the image IDs for the specified repository.</p>
 *         <p>You can filter images based on whether or not they are tagged by using the
 *                 <code>tagStatus</code> filter and specifying either <code>TAGGED</code>,
 *                 <code>UNTAGGED</code> or <code>ANY</code>. For example, you can filter your results
 *             to return only <code>UNTAGGED</code> images and then pipe that result to a <a>BatchDeleteImage</a> operation to delete them. Or, you can filter your
 *             results to return only <code>TAGGED</code> images to list all of the tags in your
 *             repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, ListImagesCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, ListImagesCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new ListImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImagesCommandInput} for command's `input` shape.
 * @see {@link ListImagesCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListImagesCommand extends $Command<ListImagesCommandInput, ListImagesCommandOutput, ECRClientResolvedConfig> {
    readonly input: ListImagesCommandInput;
    constructor(input: ListImagesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListImagesCommandInput, ListImagesCommandOutput>;
    private serialize;
    private deserialize;
}
