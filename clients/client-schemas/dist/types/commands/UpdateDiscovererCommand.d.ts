import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { UpdateDiscovererRequest, UpdateDiscovererResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDiscovererCommandInput extends UpdateDiscovererRequest {
}
export interface UpdateDiscovererCommandOutput extends UpdateDiscovererResponse, __MetadataBearer {
}
/**
 * <p>Updates the discoverer</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, UpdateDiscovererCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, UpdateDiscovererCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new UpdateDiscovererCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDiscovererCommandInput} for command's `input` shape.
 * @see {@link UpdateDiscovererCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDiscovererCommand extends $Command<UpdateDiscovererCommandInput, UpdateDiscovererCommandOutput, SchemasClientResolvedConfig> {
    readonly input: UpdateDiscovererCommandInput;
    constructor(input: UpdateDiscovererCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SchemasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDiscovererCommandInput, UpdateDiscovererCommandOutput>;
    private serialize;
    private deserialize;
}
