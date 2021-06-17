import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ListPartnerAccountsRequest, ListPartnerAccountsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPartnerAccountsCommandInput extends ListPartnerAccountsRequest {
}
export interface ListPartnerAccountsCommandOutput extends ListPartnerAccountsResponse, __MetadataBearer {
}
/**
 * <p>Lists the partner accounts associated with your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListPartnerAccountsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListPartnerAccountsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new ListPartnerAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPartnerAccountsCommandInput} for command's `input` shape.
 * @see {@link ListPartnerAccountsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPartnerAccountsCommand extends $Command<ListPartnerAccountsCommandInput, ListPartnerAccountsCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: ListPartnerAccountsCommandInput;
    constructor(input: ListPartnerAccountsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPartnerAccountsCommandInput, ListPartnerAccountsCommandOutput>;
    private serialize;
    private deserialize;
}
