import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { CreateOutpostInput, CreateOutpostOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateOutpostCommandInput extends CreateOutpostInput {
}
export interface CreateOutpostCommandOutput extends CreateOutpostOutput, __MetadataBearer {
}
/**
 * <p>Creates an Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, CreateOutpostCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, CreateOutpostCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new CreateOutpostCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOutpostCommandInput} for command's `input` shape.
 * @see {@link CreateOutpostCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateOutpostCommand extends $Command<CreateOutpostCommandInput, CreateOutpostCommandOutput, OutpostsClientResolvedConfig> {
    readonly input: CreateOutpostCommandInput;
    constructor(input: CreateOutpostCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OutpostsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateOutpostCommandInput, CreateOutpostCommandOutput>;
    private serialize;
    private deserialize;
}
