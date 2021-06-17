import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { ListReceiptFiltersRequest, ListReceiptFiltersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListReceiptFiltersCommandInput extends ListReceiptFiltersRequest {
}
export interface ListReceiptFiltersCommandOutput extends ListReceiptFiltersResponse, __MetadataBearer {
}
/**
 * <p>Lists the IP address filters associated with your AWS account in the current AWS
 *             Region.</p>
 *         <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListReceiptFiltersCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListReceiptFiltersCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new ListReceiptFiltersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReceiptFiltersCommandInput} for command's `input` shape.
 * @see {@link ListReceiptFiltersCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListReceiptFiltersCommand extends $Command<ListReceiptFiltersCommandInput, ListReceiptFiltersCommandOutput, SESClientResolvedConfig> {
    readonly input: ListReceiptFiltersCommandInput;
    constructor(input: ListReceiptFiltersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListReceiptFiltersCommandInput, ListReceiptFiltersCommandOutput>;
    private serialize;
    private deserialize;
}
