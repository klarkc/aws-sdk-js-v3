import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListStudiosInput, ListStudiosOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListStudiosCommandInput extends ListStudiosInput {
}
export interface ListStudiosCommandOutput extends ListStudiosOutput, __MetadataBearer {
}
/**
 * <p>Returns a list of all Amazon EMR Studios associated with the AWS account. The list
 *          includes details such as ID, Studio Access URL, and creation time for each Studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListStudiosCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListStudiosCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListStudiosCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStudiosCommandInput} for command's `input` shape.
 * @see {@link ListStudiosCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListStudiosCommand extends $Command<ListStudiosCommandInput, ListStudiosCommandOutput, EMRClientResolvedConfig> {
    readonly input: ListStudiosCommandInput;
    constructor(input: ListStudiosCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStudiosCommandInput, ListStudiosCommandOutput>;
    private serialize;
    private deserialize;
}
