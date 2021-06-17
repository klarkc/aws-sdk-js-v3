import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { GetOutpostInstanceTypesInput, GetOutpostInstanceTypesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetOutpostInstanceTypesCommandInput extends GetOutpostInstanceTypesInput {
}
export interface GetOutpostInstanceTypesCommandOutput extends GetOutpostInstanceTypesOutput, __MetadataBearer {
}
/**
 * <p>Lists the instance types for the specified Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetOutpostInstanceTypesCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetOutpostInstanceTypesCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new GetOutpostInstanceTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOutpostInstanceTypesCommandInput} for command's `input` shape.
 * @see {@link GetOutpostInstanceTypesCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetOutpostInstanceTypesCommand extends $Command<GetOutpostInstanceTypesCommandInput, GetOutpostInstanceTypesCommandOutput, OutpostsClientResolvedConfig> {
    readonly input: GetOutpostInstanceTypesCommandInput;
    constructor(input: GetOutpostInstanceTypesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OutpostsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOutpostInstanceTypesCommandInput, GetOutpostInstanceTypesCommandOutput>;
    private serialize;
    private deserialize;
}
