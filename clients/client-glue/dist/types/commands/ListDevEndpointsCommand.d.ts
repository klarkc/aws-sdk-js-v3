import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListDevEndpointsRequest, ListDevEndpointsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDevEndpointsCommandInput extends ListDevEndpointsRequest {
}
export interface ListDevEndpointsCommandOutput extends ListDevEndpointsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the names of all <code>DevEndpoint</code> resources in this AWS account, or the
 *       resources with the specified tag. This operation allows you to see which resources are
 *       available in your account, and their names.</p>
 *
 *          <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on
 *       the response so that tagged resources can be retrieved as a group. If you choose to use tags
 *       filtering, only resources with the tag are retrieved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListDevEndpointsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListDevEndpointsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ListDevEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDevEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListDevEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDevEndpointsCommand extends $Command<ListDevEndpointsCommandInput, ListDevEndpointsCommandOutput, GlueClientResolvedConfig> {
    readonly input: ListDevEndpointsCommandInput;
    constructor(input: ListDevEndpointsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDevEndpointsCommandInput, ListDevEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
