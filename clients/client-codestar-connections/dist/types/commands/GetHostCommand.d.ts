import { CodeStarConnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarConnectionsClient";
import { GetHostInput, GetHostOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetHostCommandInput extends GetHostInput {
}
export interface GetHostCommandOutput extends GetHostOutput, __MetadataBearer {
}
/**
 * <p>Returns the host ARN and details such as status, provider type, endpoint, and, if
 *       applicable, the VPC configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, GetHostCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, GetHostCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const command = new GetHostCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHostCommandInput} for command's `input` shape.
 * @see {@link GetHostCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetHostCommand extends $Command<GetHostCommandInput, GetHostCommandOutput, CodeStarConnectionsClientResolvedConfig> {
    readonly input: GetHostCommandInput;
    constructor(input: GetHostCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarConnectionsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHostCommandInput, GetHostCommandOutput>;
    private serialize;
    private deserialize;
}
