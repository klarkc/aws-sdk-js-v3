import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { ListByoipCidrsRequest, ListByoipCidrsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListByoipCidrsCommandInput extends ListByoipCidrsRequest {
}
export interface ListByoipCidrsCommandOutput extends ListByoipCidrsResponse, __MetadataBearer {
}
/**
 * <p>Lists the IP address ranges that were specified in calls to <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/ProvisionByoipCidr.html">ProvisionByoipCidr</a>, including
 * 			the current state and a history of state changes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListByoipCidrsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListByoipCidrsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ListByoipCidrsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListByoipCidrsCommandInput} for command's `input` shape.
 * @see {@link ListByoipCidrsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListByoipCidrsCommand extends $Command<ListByoipCidrsCommandInput, ListByoipCidrsCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: ListByoipCidrsCommandInput;
    constructor(input: ListByoipCidrsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListByoipCidrsCommandInput, ListByoipCidrsCommandOutput>;
    private serialize;
    private deserialize;
}
