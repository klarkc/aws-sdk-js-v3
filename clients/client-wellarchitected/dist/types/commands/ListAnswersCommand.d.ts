import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { ListAnswersInput, ListAnswersOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAnswersCommandInput extends ListAnswersInput {
}
export interface ListAnswersCommandOutput extends ListAnswersOutput, __MetadataBearer {
}
/**
 * <p>List of answers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListAnswersCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListAnswersCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ListAnswersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAnswersCommandInput} for command's `input` shape.
 * @see {@link ListAnswersCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAnswersCommand extends $Command<ListAnswersCommandInput, ListAnswersCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: ListAnswersCommandInput;
    constructor(input: ListAnswersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAnswersCommandInput, ListAnswersCommandOutput>;
    private serialize;
    private deserialize;
}
