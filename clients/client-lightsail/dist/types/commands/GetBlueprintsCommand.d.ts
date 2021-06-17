import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetBlueprintsRequest, GetBlueprintsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBlueprintsCommandInput extends GetBlueprintsRequest {
}
export interface GetBlueprintsCommandOutput extends GetBlueprintsResult, __MetadataBearer {
}
/**
 * <p>Returns the list of available instance images, or <i>blueprints</i>. You can
 *       use a blueprint to create a new instance already running a specific operating system, as well
 *       as a preinstalled app or development stack. The software each instance is running depends on
 *       the blueprint image you choose.</p>
 *          <note>
 *             <p>Use active blueprints when creating new instances. Inactive blueprints are listed to
 *         support customers with existing instances and are not necessarily available to create new
 *         instances. Blueprints are marked inactive when they become outdated due to operating system
 *         updates or new application releases.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetBlueprintsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetBlueprintsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetBlueprintsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBlueprintsCommandInput} for command's `input` shape.
 * @see {@link GetBlueprintsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBlueprintsCommand extends $Command<GetBlueprintsCommandInput, GetBlueprintsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetBlueprintsCommandInput;
    constructor(input: GetBlueprintsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBlueprintsCommandInput, GetBlueprintsCommandOutput>;
    private serialize;
    private deserialize;
}
