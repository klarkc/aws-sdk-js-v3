import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListReviewableHITsRequest, ListReviewableHITsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListReviewableHITsCommandInput extends ListReviewableHITsRequest {
}
export interface ListReviewableHITsCommandOutput extends ListReviewableHITsResponse, __MetadataBearer {
}
/**
 * <p>
 *             The <code>ListReviewableHITs</code> operation retrieves the HITs with Status equal to
 *             Reviewable or Status equal to Reviewing that belong to the Requester calling the operation.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListReviewableHITsCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListReviewableHITsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListReviewableHITsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReviewableHITsCommandInput} for command's `input` shape.
 * @see {@link ListReviewableHITsCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListReviewableHITsCommand extends $Command<ListReviewableHITsCommandInput, ListReviewableHITsCommandOutput, MTurkClientResolvedConfig> {
    readonly input: ListReviewableHITsCommandInput;
    constructor(input: ListReviewableHITsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListReviewableHITsCommandInput, ListReviewableHITsCommandOutput>;
    private serialize;
    private deserialize;
}
