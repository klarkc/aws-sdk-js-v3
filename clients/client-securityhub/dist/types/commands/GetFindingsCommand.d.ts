import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { GetFindingsRequest, GetFindingsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetFindingsCommandInput extends GetFindingsRequest {
}
export interface GetFindingsCommandOutput extends GetFindingsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of findings that match the specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetFindingsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetFindingsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new GetFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFindingsCommandInput} for command's `input` shape.
 * @see {@link GetFindingsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetFindingsCommand extends $Command<GetFindingsCommandInput, GetFindingsCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: GetFindingsCommandInput;
    constructor(input: GetFindingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFindingsCommandInput, GetFindingsCommandOutput>;
    private serialize;
    private deserialize;
}
