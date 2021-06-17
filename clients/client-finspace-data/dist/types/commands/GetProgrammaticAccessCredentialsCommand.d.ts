import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { GetProgrammaticAccessCredentialsRequest, GetProgrammaticAccessCredentialsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetProgrammaticAccessCredentialsCommandInput extends GetProgrammaticAccessCredentialsRequest {
}
export interface GetProgrammaticAccessCredentialsCommandOutput extends GetProgrammaticAccessCredentialsResponse, __MetadataBearer {
}
/**
 * <p>Request programmatic credentials to use with Habanero SDK.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, GetProgrammaticAccessCredentialsCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, GetProgrammaticAccessCredentialsCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const command = new GetProgrammaticAccessCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProgrammaticAccessCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetProgrammaticAccessCredentialsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetProgrammaticAccessCredentialsCommand extends $Command<GetProgrammaticAccessCredentialsCommandInput, GetProgrammaticAccessCredentialsCommandOutput, FinspaceDataClientResolvedConfig> {
    readonly input: GetProgrammaticAccessCredentialsCommandInput;
    constructor(input: GetProgrammaticAccessCredentialsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FinspaceDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetProgrammaticAccessCredentialsCommandInput, GetProgrammaticAccessCredentialsCommandOutput>;
    private serialize;
    private deserialize;
}
