import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { CreateDBClusterEndpointMessage, CreateDBClusterEndpointOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDBClusterEndpointCommandInput extends CreateDBClusterEndpointMessage {
}
export interface CreateDBClusterEndpointCommandOutput extends CreateDBClusterEndpointOutput, __MetadataBearer {
}
/**
 * <p>Creates a new custom endpoint and associates it with an Amazon Neptune DB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CreateDBClusterEndpointCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CreateDBClusterEndpointCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new CreateDBClusterEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBClusterEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterEndpointCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDBClusterEndpointCommand extends $Command<CreateDBClusterEndpointCommandInput, CreateDBClusterEndpointCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: CreateDBClusterEndpointCommandInput;
    constructor(input: CreateDBClusterEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBClusterEndpointCommandInput, CreateDBClusterEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
