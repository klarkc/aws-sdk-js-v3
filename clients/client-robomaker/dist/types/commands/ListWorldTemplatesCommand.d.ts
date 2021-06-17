import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { ListWorldTemplatesRequest, ListWorldTemplatesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListWorldTemplatesCommandInput extends ListWorldTemplatesRequest {
}
export interface ListWorldTemplatesCommandOutput extends ListWorldTemplatesResponse, __MetadataBearer {
}
/**
 * <p>Lists world templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListWorldTemplatesCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListWorldTemplatesCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListWorldTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorldTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListWorldTemplatesCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListWorldTemplatesCommand extends $Command<ListWorldTemplatesCommandInput, ListWorldTemplatesCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: ListWorldTemplatesCommandInput;
    constructor(input: ListWorldTemplatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWorldTemplatesCommandInput, ListWorldTemplatesCommandOutput>;
    private serialize;
    private deserialize;
}
