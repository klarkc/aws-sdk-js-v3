import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { ListCodeReviewsRequest, ListCodeReviewsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCodeReviewsCommandInput extends ListCodeReviewsRequest {
}
export interface ListCodeReviewsCommandOutput extends ListCodeReviewsResponse, __MetadataBearer {
}
/**
 * <p>
 *          Lists all the code reviews that the customer has created in the past 90 days.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, ListCodeReviewsCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, ListCodeReviewsCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new ListCodeReviewsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCodeReviewsCommandInput} for command's `input` shape.
 * @see {@link ListCodeReviewsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCodeReviewsCommand extends $Command<ListCodeReviewsCommandInput, ListCodeReviewsCommandOutput, CodeGuruReviewerClientResolvedConfig> {
    readonly input: ListCodeReviewsCommandInput;
    constructor(input: ListCodeReviewsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruReviewerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCodeReviewsCommandInput, ListCodeReviewsCommandOutput>;
    private serialize;
    private deserialize;
}
