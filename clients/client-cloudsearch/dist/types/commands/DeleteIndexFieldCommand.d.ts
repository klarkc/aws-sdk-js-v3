import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DeleteIndexFieldRequest, DeleteIndexFieldResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteIndexFieldCommandInput extends DeleteIndexFieldRequest {
}
export interface DeleteIndexFieldCommandOutput extends DeleteIndexFieldResponse, __MetadataBearer {
}
/**
 * <p>Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DeleteIndexFieldCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DeleteIndexFieldCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DeleteIndexFieldCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIndexFieldCommandInput} for command's `input` shape.
 * @see {@link DeleteIndexFieldCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteIndexFieldCommand extends $Command<DeleteIndexFieldCommandInput, DeleteIndexFieldCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DeleteIndexFieldCommandInput;
    constructor(input: DeleteIndexFieldCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIndexFieldCommandInput, DeleteIndexFieldCommandOutput>;
    private serialize;
    private deserialize;
}
