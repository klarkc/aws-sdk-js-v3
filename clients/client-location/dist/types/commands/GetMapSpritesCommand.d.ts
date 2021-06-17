import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { GetMapSpritesRequest, GetMapSpritesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMapSpritesCommandInput extends GetMapSpritesRequest {
}
export interface GetMapSpritesCommandOutput extends GetMapSpritesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG
 *             image paired with a JSON document describing the offsets of individual icons that will
 *             be displayed on a rendered map.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetMapSpritesCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetMapSpritesCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new GetMapSpritesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMapSpritesCommandInput} for command's `input` shape.
 * @see {@link GetMapSpritesCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMapSpritesCommand extends $Command<GetMapSpritesCommandInput, GetMapSpritesCommandOutput, LocationClientResolvedConfig> {
    readonly input: GetMapSpritesCommandInput;
    constructor(input: GetMapSpritesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMapSpritesCommandInput, GetMapSpritesCommandOutput>;
    private serialize;
    private deserialize;
}
