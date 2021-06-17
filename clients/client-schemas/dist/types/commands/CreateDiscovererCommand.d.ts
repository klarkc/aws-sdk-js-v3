import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { CreateDiscovererRequest, CreateDiscovererResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDiscovererCommandInput extends CreateDiscovererRequest {
}
export interface CreateDiscovererCommandOutput extends CreateDiscovererResponse, __MetadataBearer {
}
/**
 * <p>Creates a discoverer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, CreateDiscovererCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, CreateDiscovererCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new CreateDiscovererCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDiscovererCommandInput} for command's `input` shape.
 * @see {@link CreateDiscovererCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDiscovererCommand extends $Command<CreateDiscovererCommandInput, CreateDiscovererCommandOutput, SchemasClientResolvedConfig> {
    readonly input: CreateDiscovererCommandInput;
    constructor(input: CreateDiscovererCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SchemasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDiscovererCommandInput, CreateDiscovererCommandOutput>;
    private serialize;
    private deserialize;
}
