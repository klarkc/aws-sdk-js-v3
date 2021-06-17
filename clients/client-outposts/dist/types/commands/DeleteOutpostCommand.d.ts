import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { DeleteOutpostInput, DeleteOutpostOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteOutpostCommandInput extends DeleteOutpostInput {
}
export interface DeleteOutpostCommandOutput extends DeleteOutpostOutput, __MetadataBearer {
}
/**
 * <p>Deletes the Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, DeleteOutpostCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, DeleteOutpostCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new DeleteOutpostCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOutpostCommandInput} for command's `input` shape.
 * @see {@link DeleteOutpostCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteOutpostCommand extends $Command<DeleteOutpostCommandInput, DeleteOutpostCommandOutput, OutpostsClientResolvedConfig> {
    readonly input: DeleteOutpostCommandInput;
    constructor(input: DeleteOutpostCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OutpostsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteOutpostCommandInput, DeleteOutpostCommandOutput>;
    private serialize;
    private deserialize;
}
