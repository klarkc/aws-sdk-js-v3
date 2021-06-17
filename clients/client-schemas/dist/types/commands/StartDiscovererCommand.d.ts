import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { StartDiscovererRequest, StartDiscovererResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartDiscovererCommandInput extends StartDiscovererRequest {
}
export interface StartDiscovererCommandOutput extends StartDiscovererResponse, __MetadataBearer {
}
/**
 * <p>Starts the discoverer</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, StartDiscovererCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, StartDiscovererCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new StartDiscovererCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDiscovererCommandInput} for command's `input` shape.
 * @see {@link StartDiscovererCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartDiscovererCommand extends $Command<StartDiscovererCommandInput, StartDiscovererCommandOutput, SchemasClientResolvedConfig> {
    readonly input: StartDiscovererCommandInput;
    constructor(input: StartDiscovererCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SchemasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDiscovererCommandInput, StartDiscovererCommandOutput>;
    private serialize;
    private deserialize;
}
