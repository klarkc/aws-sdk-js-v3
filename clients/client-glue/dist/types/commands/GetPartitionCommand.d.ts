import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetPartitionRequest, GetPartitionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPartitionCommandInput extends GetPartitionRequest {
}
export interface GetPartitionCommandOutput extends GetPartitionResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about a specified partition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetPartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetPartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetPartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPartitionCommandInput} for command's `input` shape.
 * @see {@link GetPartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPartitionCommand extends $Command<GetPartitionCommandInput, GetPartitionCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetPartitionCommandInput;
    constructor(input: GetPartitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPartitionCommandInput, GetPartitionCommandOutput>;
    private serialize;
    private deserialize;
}
