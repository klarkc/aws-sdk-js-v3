import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { ListActionsRequest, ListActionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListActionsCommandInput extends ListActionsRequest {
}
export interface ListActionsCommandOutput extends ListActionsResponse, __MetadataBearer {
}
/**
 * <p>Lists the available AWS FIS actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, ListActionsCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, ListActionsCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new ListActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListActionsCommandInput} for command's `input` shape.
 * @see {@link ListActionsCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListActionsCommand extends $Command<ListActionsCommandInput, ListActionsCommandOutput, FisClientResolvedConfig> {
    readonly input: ListActionsCommandInput;
    constructor(input: ListActionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListActionsCommandInput, ListActionsCommandOutput>;
    private serialize;
    private deserialize;
}
