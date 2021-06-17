import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListSchemasRequest, ListSchemasResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSchemasCommandInput extends ListSchemasRequest {
}
export interface ListSchemasCommandOutput extends ListSchemasResponse, __MetadataBearer {
}
/**
 * <p>Returns the list of schemas associated with the account. The response provides the
 *       properties for each schema, including the Amazon Resource Name (ARN).
 *       For more information on schemas, see <a>CreateSchema</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListSchemasCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListSchemasCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListSchemasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSchemasCommandInput} for command's `input` shape.
 * @see {@link ListSchemasCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSchemasCommand extends $Command<ListSchemasCommandInput, ListSchemasCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: ListSchemasCommandInput;
    constructor(input: ListSchemasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSchemasCommandInput, ListSchemasCommandOutput>;
    private serialize;
    private deserialize;
}
