import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { GetEnabledStandardsRequest, GetEnabledStandardsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEnabledStandardsCommandInput extends GetEnabledStandardsRequest {
}
export interface GetEnabledStandardsCommandOutput extends GetEnabledStandardsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of the standards that are currently enabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetEnabledStandardsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetEnabledStandardsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new GetEnabledStandardsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEnabledStandardsCommandInput} for command's `input` shape.
 * @see {@link GetEnabledStandardsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEnabledStandardsCommand extends $Command<GetEnabledStandardsCommandInput, GetEnabledStandardsCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: GetEnabledStandardsCommandInput;
    constructor(input: GetEnabledStandardsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEnabledStandardsCommandInput, GetEnabledStandardsCommandOutput>;
    private serialize;
    private deserialize;
}
