import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { ListRobotsRequest, ListRobotsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRobotsCommandInput extends ListRobotsRequest {
}
export interface ListRobotsCommandOutput extends ListRobotsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of robots. You can optionally provide filters to retrieve specific
 *          robots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListRobotsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListRobotsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListRobotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRobotsCommandInput} for command's `input` shape.
 * @see {@link ListRobotsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRobotsCommand extends $Command<ListRobotsCommandInput, ListRobotsCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: ListRobotsCommandInput;
    constructor(input: ListRobotsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRobotsCommandInput, ListRobotsCommandOutput>;
    private serialize;
    private deserialize;
}
