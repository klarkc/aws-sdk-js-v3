import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListOfferingsRequest, ListOfferingsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListOfferingsCommandInput extends ListOfferingsRequest {
}
export interface ListOfferingsCommandOutput extends ListOfferingsResult, __MetadataBearer {
}
/**
 * <p>Returns a list of products or offerings that the user can manage through the API. Each offering record
 *             indicates the recurring price per unit and the frequency for that offering. The API returns a
 *                 <code>NotEligible</code> error if the user is not permitted to invoke the operation.  If you must be
 *             able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListOfferingsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListOfferingsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOfferingsCommandInput} for command's `input` shape.
 * @see {@link ListOfferingsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListOfferingsCommand extends $Command<ListOfferingsCommandInput, ListOfferingsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListOfferingsCommandInput;
    constructor(input: ListOfferingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOfferingsCommandInput, ListOfferingsCommandOutput>;
    private serialize;
    private deserialize;
}
