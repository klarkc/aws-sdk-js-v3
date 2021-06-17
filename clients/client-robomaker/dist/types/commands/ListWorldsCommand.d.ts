import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { ListWorldsRequest, ListWorldsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListWorldsCommandInput extends ListWorldsRequest {
}
export interface ListWorldsCommandOutput extends ListWorldsResponse, __MetadataBearer {
}
/**
 * <p>Lists worlds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListWorldsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListWorldsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListWorldsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorldsCommandInput} for command's `input` shape.
 * @see {@link ListWorldsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListWorldsCommand extends $Command<ListWorldsCommandInput, ListWorldsCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: ListWorldsCommandInput;
    constructor(input: ListWorldsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWorldsCommandInput, ListWorldsCommandOutput>;
    private serialize;
    private deserialize;
}
