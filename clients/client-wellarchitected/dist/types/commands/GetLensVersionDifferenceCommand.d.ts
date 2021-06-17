import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { GetLensVersionDifferenceInput, GetLensVersionDifferenceOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLensVersionDifferenceCommandInput extends GetLensVersionDifferenceInput {
}
export interface GetLensVersionDifferenceCommandOutput extends GetLensVersionDifferenceOutput, __MetadataBearer {
}
/**
 * <p>Get lens version differences.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetLensVersionDifferenceCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetLensVersionDifferenceCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new GetLensVersionDifferenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLensVersionDifferenceCommandInput} for command's `input` shape.
 * @see {@link GetLensVersionDifferenceCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLensVersionDifferenceCommand extends $Command<GetLensVersionDifferenceCommandInput, GetLensVersionDifferenceCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: GetLensVersionDifferenceCommandInput;
    constructor(input: GetLensVersionDifferenceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLensVersionDifferenceCommandInput, GetLensVersionDifferenceCommandOutput>;
    private serialize;
    private deserialize;
}
