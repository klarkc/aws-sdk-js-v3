import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { GetMinuteUsageRequest, GetMinuteUsageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMinuteUsageCommandInput extends GetMinuteUsageRequest {
}
export interface GetMinuteUsageCommandOutput extends GetMinuteUsageResponse, __MetadataBearer {
}
/**
 * <p>Returns the number of minutes used by account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, GetMinuteUsageCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, GetMinuteUsageCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new GetMinuteUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMinuteUsageCommandInput} for command's `input` shape.
 * @see {@link GetMinuteUsageCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMinuteUsageCommand extends $Command<GetMinuteUsageCommandInput, GetMinuteUsageCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: GetMinuteUsageCommandInput;
    constructor(input: GetMinuteUsageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMinuteUsageCommandInput, GetMinuteUsageCommandOutput>;
    private serialize;
    private deserialize;
}
