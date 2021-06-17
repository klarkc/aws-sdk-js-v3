import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { GetOutpostInput, GetOutpostOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetOutpostCommandInput extends GetOutpostInput {
}
export interface GetOutpostCommandOutput extends GetOutpostOutput, __MetadataBearer {
}
/**
 * <p>Gets information about the specified Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetOutpostCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetOutpostCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new GetOutpostCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOutpostCommandInput} for command's `input` shape.
 * @see {@link GetOutpostCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetOutpostCommand extends $Command<GetOutpostCommandInput, GetOutpostCommandOutput, OutpostsClientResolvedConfig> {
    readonly input: GetOutpostCommandInput;
    constructor(input: GetOutpostCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OutpostsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOutpostCommandInput, GetOutpostCommandOutput>;
    private serialize;
    private deserialize;
}
