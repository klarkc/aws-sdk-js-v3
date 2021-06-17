import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { StopDiscovererRequest, StopDiscovererResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopDiscovererCommandInput extends StopDiscovererRequest {
}
export interface StopDiscovererCommandOutput extends StopDiscovererResponse, __MetadataBearer {
}
/**
 * <p>Stops the discoverer</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, StopDiscovererCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, StopDiscovererCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new StopDiscovererCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDiscovererCommandInput} for command's `input` shape.
 * @see {@link StopDiscovererCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopDiscovererCommand extends $Command<StopDiscovererCommandInput, StopDiscovererCommandOutput, SchemasClientResolvedConfig> {
    readonly input: StopDiscovererCommandInput;
    constructor(input: StopDiscovererCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SchemasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopDiscovererCommandInput, StopDiscovererCommandOutput>;
    private serialize;
    private deserialize;
}
