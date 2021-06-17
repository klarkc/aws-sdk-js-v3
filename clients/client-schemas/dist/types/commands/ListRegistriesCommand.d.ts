import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { ListRegistriesRequest, ListRegistriesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRegistriesCommandInput extends ListRegistriesRequest {
}
export interface ListRegistriesCommandOutput extends ListRegistriesResponse, __MetadataBearer {
}
/**
 * <p>List the registries.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, ListRegistriesCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, ListRegistriesCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new ListRegistriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRegistriesCommandInput} for command's `input` shape.
 * @see {@link ListRegistriesCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRegistriesCommand extends $Command<ListRegistriesCommandInput, ListRegistriesCommandOutput, SchemasClientResolvedConfig> {
    readonly input: ListRegistriesCommandInput;
    constructor(input: ListRegistriesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SchemasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRegistriesCommandInput, ListRegistriesCommandOutput>;
    private serialize;
    private deserialize;
}
