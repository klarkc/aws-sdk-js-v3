import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ListEntityRecognizersRequest, ListEntityRecognizersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEntityRecognizersCommandInput extends ListEntityRecognizersRequest {
}
export interface ListEntityRecognizersCommandOutput extends ListEntityRecognizersResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of the properties of all entity recognizers that you created, including
 *       recognizers currently in training. Allows you to filter the list of recognizers based on
 *       criteria such as status and submission time. This call returns up to 500 entity recognizers in
 *       the list, with a default number of 100 recognizers in the list.</p>
 *          <p>The results of this list are not in any particular order. Please get the list and sort
 *       locally if needed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListEntityRecognizersCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListEntityRecognizersCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ListEntityRecognizersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEntityRecognizersCommandInput} for command's `input` shape.
 * @see {@link ListEntityRecognizersCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEntityRecognizersCommand extends $Command<ListEntityRecognizersCommandInput, ListEntityRecognizersCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: ListEntityRecognizersCommandInput;
    constructor(input: ListEntityRecognizersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEntityRecognizersCommandInput, ListEntityRecognizersCommandOutput>;
    private serialize;
    private deserialize;
}
