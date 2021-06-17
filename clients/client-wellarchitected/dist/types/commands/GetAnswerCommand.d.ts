import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { GetAnswerInput, GetAnswerOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAnswerCommandInput extends GetAnswerInput {
}
export interface GetAnswerCommandOutput extends GetAnswerOutput, __MetadataBearer {
}
/**
 * <p>Get lens review.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetAnswerCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetAnswerCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new GetAnswerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAnswerCommandInput} for command's `input` shape.
 * @see {@link GetAnswerCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAnswerCommand extends $Command<GetAnswerCommandInput, GetAnswerCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: GetAnswerCommandInput;
    constructor(input: GetAnswerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAnswerCommandInput, GetAnswerCommandOutput>;
    private serialize;
    private deserialize;
}
