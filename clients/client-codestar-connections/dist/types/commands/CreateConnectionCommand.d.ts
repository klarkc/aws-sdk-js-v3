import { CodeStarConnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarConnectionsClient";
import { CreateConnectionInput, CreateConnectionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateConnectionCommandInput extends CreateConnectionInput {
}
export interface CreateConnectionCommandOutput extends CreateConnectionOutput, __MetadataBearer {
}
/**
 * <p>Creates a connection that can then be given to other AWS services like CodePipeline so
 *       that it can access third-party code repositories. The connection is in pending status until
 *       the third-party connection handshake is completed from the console.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, CreateConnectionCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, CreateConnectionCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const command = new CreateConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectionCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateConnectionCommand extends $Command<CreateConnectionCommandInput, CreateConnectionCommandOutput, CodeStarConnectionsClientResolvedConfig> {
    readonly input: CreateConnectionCommandInput;
    constructor(input: CreateConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarConnectionsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConnectionCommandInput, CreateConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
