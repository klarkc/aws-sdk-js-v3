import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetPartitionsRequest, GetPartitionsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPartitionsCommandInput extends GetPartitionsRequest {
}
export interface GetPartitionsCommandOutput extends GetPartitionsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the partitions in a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetPartitionsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetPartitionsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetPartitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPartitionsCommandInput} for command's `input` shape.
 * @see {@link GetPartitionsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPartitionsCommand extends $Command<GetPartitionsCommandInput, GetPartitionsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetPartitionsCommandInput;
    constructor(input: GetPartitionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPartitionsCommandInput, GetPartitionsCommandOutput>;
    private serialize;
    private deserialize;
}
