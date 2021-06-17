import { CodeStarConnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarConnectionsClient";
import { GetConnectionInput, GetConnectionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetConnectionCommandInput extends GetConnectionInput {
}
export interface GetConnectionCommandOutput extends GetConnectionOutput, __MetadataBearer {
}
/**
 * <p>Returns the connection ARN and details such as status, owner, and provider type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, GetConnectionCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, GetConnectionCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const command = new GetConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConnectionCommandInput} for command's `input` shape.
 * @see {@link GetConnectionCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetConnectionCommand extends $Command<GetConnectionCommandInput, GetConnectionCommandOutput, CodeStarConnectionsClientResolvedConfig> {
    readonly input: GetConnectionCommandInput;
    constructor(input: GetConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarConnectionsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConnectionCommandInput, GetConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
