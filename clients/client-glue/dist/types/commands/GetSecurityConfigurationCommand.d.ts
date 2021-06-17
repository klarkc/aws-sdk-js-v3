import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetSecurityConfigurationRequest, GetSecurityConfigurationResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSecurityConfigurationCommandInput extends GetSecurityConfigurationRequest {
}
export interface GetSecurityConfigurationCommandOutput extends GetSecurityConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a specified security configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSecurityConfigurationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSecurityConfigurationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSecurityConfigurationCommand extends $Command<GetSecurityConfigurationCommandInput, GetSecurityConfigurationCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetSecurityConfigurationCommandInput;
    constructor(input: GetSecurityConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSecurityConfigurationCommandInput, GetSecurityConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
