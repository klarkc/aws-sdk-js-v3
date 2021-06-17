import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListTargetsForSecurityProfileRequest, ListTargetsForSecurityProfileResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTargetsForSecurityProfileCommandInput extends ListTargetsForSecurityProfileRequest {
}
export interface ListTargetsForSecurityProfileCommandOutput extends ListTargetsForSecurityProfileResponse, __MetadataBearer {
}
/**
 * <p>Lists the targets (thing groups) associated with a given Device Defender security profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListTargetsForSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListTargetsForSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListTargetsForSecurityProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTargetsForSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link ListTargetsForSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTargetsForSecurityProfileCommand extends $Command<ListTargetsForSecurityProfileCommandInput, ListTargetsForSecurityProfileCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListTargetsForSecurityProfileCommandInput;
    constructor(input: ListTargetsForSecurityProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTargetsForSecurityProfileCommandInput, ListTargetsForSecurityProfileCommandOutput>;
    private serialize;
    private deserialize;
}
