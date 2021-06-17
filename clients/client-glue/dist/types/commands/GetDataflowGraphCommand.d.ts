import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDataflowGraphRequest, GetDataflowGraphResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDataflowGraphCommandInput extends GetDataflowGraphRequest {
}
export interface GetDataflowGraphCommandOutput extends GetDataflowGraphResponse, __MetadataBearer {
}
/**
 * <p>Transforms a Python script into a directed acyclic graph (DAG). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataflowGraphCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataflowGraphCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetDataflowGraphCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataflowGraphCommandInput} for command's `input` shape.
 * @see {@link GetDataflowGraphCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDataflowGraphCommand extends $Command<GetDataflowGraphCommandInput, GetDataflowGraphCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetDataflowGraphCommandInput;
    constructor(input: GetDataflowGraphCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDataflowGraphCommandInput, GetDataflowGraphCommandOutput>;
    private serialize;
    private deserialize;
}
