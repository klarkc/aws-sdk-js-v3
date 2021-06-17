import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetAppsRequest, GetAppsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAppsCommandInput extends GetAppsRequest {
}
export interface GetAppsCommandOutput extends GetAppsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about all the applications that are associated with your Amazon Pinpoint account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetAppsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetAppsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetAppsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppsCommandInput} for command's `input` shape.
 * @see {@link GetAppsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAppsCommand extends $Command<GetAppsCommandInput, GetAppsCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetAppsCommandInput;
    constructor(input: GetAppsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAppsCommandInput, GetAppsCommandOutput>;
    private serialize;
    private deserialize;
}
